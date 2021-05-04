<template>
  <div class="wrapper clearfix">
    <Players :players="players" />
    <Controls
      :final-score="getFinalScore"
      :rolling="getIsRolling"
      :host="getIsHost"
      :start="getIsStartGame"
      @newGame="handleNewGame"
      @rollDice="handleRollDice"
    />
    <Dices :dices="getDices" />
    <Popup
      :players="players"
      :is-show="getIsShowPopup"
      @knownRule="handleKnownRule"
      @selectedPlayer="handleSelectedPlayer"
    />
    <CreateName
      :is-show="getIsShowPopupCreatedName"
      @createName="handleCreateName"
    />
    <Winner
      :is-show="getIsShowPopupWinner"
      :message="getWinnerMesssage"
      @haveWinner="handleHaveWinner"
    />
    <Toast :invite="getInviteLink" :show="getIsShowToast" />
    <LostTurn :position="getIsHost" :show="getIsShowLostToast" />
    <LostTurn :position="!getIsHost" :show="getIsShowOtherLostToast" />
  </div>
</template>

<script>
import io from 'socket.io-client'
import Players from '../components/Players'
import Controls from '../components/Controls'
import Dices from '../components/Dices'
import Popup from '../components/Popup'
import CreateName from '../components/Popup/CreateName.vue'
import Winner from '../components/Popup/Winner.vue'
import LostTurn from '../components/Toast/LostTurn.vue'
import Toast from '../components/Toast'
export default {
  components: {
    Players,
    Controls,
    Dices,
    Popup,
    CreateName,
    Toast,
    LostTurn,
    Winner,
  },
  data() {
    return {
      players: [
        {
          id: 0,
          name: 'đang chờ...',
          currentScore: 0,
          totalScore: 0,
          status: '',
          isSelected: false,
        },
        {
          id: 1,
          name: 'đang chờ...',
          currentScore: 0,
          totalScore: 0,
          status: '',
          isSelected: false,
          socket: {},
          socketId: '',
        },
      ],
      activePlayer: 0,
      isShowPopup: false,
      isShowPopupCreateName: false,
      isShowToast: false,
      finalScore: 0,
      dices: [1, 1],
      firstPlayer: {},
      isHost: false,
      isPartner: false,
      isPartnerJoin: false,
      rolling: false,
      startGame: false,
      inviteLink: '',
      playerNameCreated: '',
      showLostToast: false,
      showOtherLostToast: false,
      showPopupWinner: false,
      haveWinner: false,
      winnerMesssage: '',
    }
  },
  computed: {
    getIsShowPopup() {
      return this.isShowPopup
    },
    getIsShowPopupCreatedName() {
      return this.isShowPopupCreateName
    },
    getPlayerNameCreated() {
      return this.playerNameCreated
    },
    getIsShowToast() {
      return this.isShowToast
    },
    getDices() {
      return this.dices
    },
    getFinalScore() {
      return this.finalScore
    },
    getInviteLink() {
      return this.inviteLink
    },
    getIsRolling() {
      return this.rolling
    },
    getIsHost() {
      return this.isHost
    },
    getIsStartGame() {
      return this.startGame
    },
    getIsShowLostToast() {
      return this.showLostToast
    },
    getIsShowOtherLostToast() {
      return this.showOtherLostToast
    },
    getIsShowPopupWinner() {
      return this.showPopupWinner
    },
    getIsHaveWinner() {
      return this.haveWinner
    },
    getWinnerMesssage() {
      return this.winnerMesssage
    },
  },
  created() {
    this.socket = io('localhost:5000')
    const roomId = this.$route.query.id
    if (roomId) {
      this.socket.emit('partner-join', roomId)
      this.isHost = false
    } else {
      this.socket.emit('host-join')
      this.isHost = true
    }
  },
  mounted() {
    this.isShowPopupCreateName = true
    if (this.isHost) {
      const hostName = 'localhost:5000'
      this.socket.on('host-id', (roomId) => {
        this.inviteLink = `${hostName}/?id=${roomId}`
        console.log(this.inviteLink)
        this.socket.on('partner-joined', () => {
          this.isShowToast = false
          this.players[1].name = 'naming...'
        })
        this.socket.on('partnerNameCreated', (partnerName) => {
          this.players[1].name = partnerName
          this.startGame = true
        })
      })
    } else {
      this.socket.on('partner-join', (hostName) => {
        this.players[0].name = hostName
        this.isPartner = true
        console.log('partner roll')
        if (this.players[1].status === 'active') {
          this.rolling = true
          console.log('partner roll')
        } else {
          this.rolling = false
        }
      })
    }
    this.socket.on('startedNewGame', (newGameState) => {
      this.activePlayer = newGameState.activePlayer
      this.finalScore = newGameState.finalScore
      this.haveWinner = newGameState.isHaveWinner
      this.showOtherLostToast = false
      this.showPopupWinner = false
      this.showLostToast = false
      this.handlePlayNewGame(this.activePlayer)
      if (this.isHost) {
        this.rolling = this.players[0].status === 'active'
      } else {
        this.rolling = this.players[1].status === 'active'
      }
    })
    this.socket.on('roll-dice', (playingState) => {
      this.dices = playingState.dices
      this.players = playingState.players
      this.activePlayer = playingState.activePlayer
      if (this.isHost) {
        this.rolling = this.players[0].status === 'active'
        if (playingState.isLostTurn) {
          this.showLostToast = !(this.players[0].status === 'active')
          this.showOtherLostToast = !this.showLostToast
        }
      } else {
        this.rolling = this.players[1].status === 'active'
        if (playingState.isLostTurn) {
          this.showLostToast = !(this.players[1].status === 'active')
          this.showOtherLostToast = !this.showLostToast
        }
      }
      if (playingState.isHaveWinner) {
        if (this.isHost && this.activePlayer === 0) {
          this.winnerMesssage = 'Thắng rồi!'
        } else if (this.isHost && this.activePlayer === 1) {
          this.winnerMesssage = 'Thua rồi!'
        } else if (!this.isHost && this.activePlayer === 1) {
          this.winnerMesssage = 'Thắng rồi!'
        } else {
          this.winnerMesssage = 'Thua rồi!'
        }
        this.haveWinner = true
        this.showPopupWinner = true
        this.showOtherLostToast = false
        this.players[this.activePlayer].name = 'winner'
      }
    })
    this.socket.on('resetName', (playersName) => {
      this.players[0].name = playersName[0]
      this.players[1].name = playersName[1]
    })
  },
  methods: {
    setActivePlayer(play) {
      this.activePlayer = play
      this.players[this.activePlayer].status = 'active'
      for (let i = 0; i < this.players.length; i++) {
        if (i !== this.activePlayer) {
          this.players[i].currentScore = 0
          this.players[i].totalScore = 0
          this.players[i].status = ''
        }
      }
    },

    handleNewGame() {
      this.isShowPopup = true
      this.socket.emit('resetName')
    },
    handlePlayNewGame(first) {
      this.dices = [1, 1]
      this.activePlayer = first
      this.players[this.activePlayer].status = 'active'
      for (let i = 0; i < this.players.length; i++) {
        if (i !== this.activePlayer) {
          this.players[i].status = ''
        }
        this.players[i].currentScore = 0
        this.players[i].totalScore = 0
      }
    },
    handleKnownRule(newGameData) {
      this.isShowPopup = false
      let newGameState = {}
      // eslint-disable-next-line no-undef
      this.finalScore = Number(newGameData.finalScore)
      this.handlePlayNewGame(newGameData.firstPlayer.id)
      this.haveWinner = false
      newGameState = {
        activePlayer: this.activePlayer,
        finalScore: this.finalScore,
        isHaveWinner: this.haveWinner,
      }
      this.socket.emit('startNewGame', newGameState)
    },
    handleSelectedPlayer(player) {
      this.players[player.id].isSelected = true
      for (let i = 0; i < this.players.length; i++) {
        if (this.players[i].id !== player.id) {
          this.players[i].isSelected = false
        }
      }
    },
    handleCreateName(playerName) {
      this.playerNameCreated = playerName
      this.isShowPopupCreateName = false
      if (this.isHost) {
        this.players[0].name = this.playerNameCreated
        this.isShowToast = true
        this.socket.emit('setHostName', this.playerNameCreated)
      } else {
        this.players[1].name = this.playerNameCreated
        this.socket.emit('setPartName', this.playerNameCreated)
      }
    },
    handleHaveWinner() {
      this.showPopupWinner = false
      this.showOtherLostToast = false
      this.showLostToast = false
      this.rolling = false
      for (let i = 0; i < this.players.length; i++) {
        this.players[i].status = ''
      }
    },
    handleRollDice() {
      let playingState = {}
      let lostTurn = false
      const dice1 = Math.floor(Math.random() * 6) + 1
      const dice2 = Math.floor(Math.random() * 6) + 1
      const currentScore = dice1 + dice2
      this.dices = [dice1, dice2]
      this.players[this.activePlayer].currentScore = currentScore
      this.players[this.activePlayer].totalScore += currentScore
      if (dice1 === 1 || dice2 === 1) {
        const nextPlayer = this.players.filter(
          (player) => player.id !== this.activePlayer
        )
        this.rolling = false
        lostTurn = true
        this.setActivePlayer(nextPlayer[0].id)
        this.showLostToast = true
      }
      if (this.players[this.activePlayer].totalScore >= this.finalScore) {
        if (this.isHost && this.activePlayer === 0) {
          this.winnerMesssage = 'Thắng rồi!'
        } else if (this.isHost && this.activePlayer === 1) {
          this.winnerMesssage = 'Thua rồi!'
        } else if (!this.isHost && this.activePlayer === 1) {
          this.winnerMesssage = 'Thắng rồi!'
        } else {
          this.winnerMesssage = 'Thua rồi!'
        }
        this.haveWinner = true
        this.showPopupWinner = true
        this.players[this.activePlayer].name = 'winner'
      }
      playingState = {
        dices: this.dices,
        players: this.players,
        activePlayer: this.activePlayer,
        isLostTurn: lostTurn,
        isHaveWinner: this.haveWinner,
      }
      this.socket.emit('roll-dice', playingState)
    },
  },
}
</script>
