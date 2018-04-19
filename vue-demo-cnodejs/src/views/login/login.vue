<template>
	<div id="login" @keyup.enter="login">
		<transition name="slideT">
			<div class="login-tip" v-show="tipFlag">
				用户名：111111 &nbsp&nbsp&nbsp 密码：111111
			</div>
		</transition>
		<form novalidate autocomplete="off">
			<md-avatar class="md-large">
				<img src="./img/login_avatar.jpg" alt="People">
			</md-avatar>
    <md-field md-clearable>
      <label>账号</label>
      <md-input v-model="username"></md-input>
    </md-field>

    <md-field>
      <label>密码</label>
      <md-input v-model="password" type="password"></md-input>
    </md-field>
			<md-button class="md-raised md-accent" @click="login">登录</md-button>
		</form>
		    <md-dialog-alert :md-active.sync="inputFlag" :md-content="content"/>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				content: ' ',
				tipFlag: false,
				inputFlag: false,
				username: '',
				password: '',
			}
		},
		computed: {
		},
		mounted() {
			this.tipFlag = true;
			setTimeout(function() {
				this.tipFlag = false;
			}.bind(this), 4000)
		},
		methods: {
			login() {
				var username = this.username;
				var pass = this.password;
				/*验证用户名和密码是否为空*/
				if (username===''){
				this.content='账号不能为空' 
				this.inputFlag=true
				return
				}
				else if(pass===''){
                this.content='密码不能为空'
                this.inputFlag=true
                return
				}
				else if(username!=='111111'||pass!=='111111'){
				this.content='账号密码不匹配'
				this.inputFlag=true
				return
				}
				else{
                    setTimeout(function() {
						this.$router.push({
							name: 'movie'
						})
					}.bind(this), 600)
				}
				},
		}
	}
</script>
<style lang="scss" scoped>
	#login {
		width: 100%;
		height: 100%;
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		background: #fff;
		background: url('./img/login_bg.jpg') no-repeat center center;
		background-size: cover;
		form {
			width: 70%;
			padding-bottom:90px
		}
	}
	.md-input {
		color: black;
		box-sizing: border-box;
		padding-left: 30px;
	}

	.md-avatar.md-large {
		width: 150px;
		margin-top:200px;
		min-width: 150px;
		height: 150px;
		min-height: 150px;
		border-radius: 150px;
	}
		.login-tip {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		min-height: 64px;
		line-height: 64px;
		text-align: center;
		background-color: rgba(200, 200, 200, .8);
		color: #fff;
	}
</style>