<template>
	<div class="wrapper">
		<div class="login">
			<ul class="login__languages">
				<li class="login__language">
					<a
						class="login__flag login__flag--ru"
						:class="{'login__flag--active' : true}"
					>
            Русский
          </a>
				</li>
				<li class="login__language">
					<a
						class="login__flag  login__flag--en"
						:class="{'login__flag--active' : false}"
					> 
            English
          </a>
				</li>
			</ul>
			<form 
				v-if="!register" 
				class="login__form"
			>
				<h1 class="login__heading">Вход</h1>
				<input 
					v-model="currentLogin" 
					class="login__input" 
					type="text" 
					name="login" 
					placeholder="Имя пользователя"
				>
				<input 
					v-model="currentPassword" 
					class="login__input" 
					type="password" 
					name="password" 
					placeholder="Пароль"
				>
				<button 
					@click="goToChats" 
					class="login__submit" 
					type="button"
				>
					Вход
				</button>
			</form>
			<form 
				v-if="register" 
				class="login__form"
			>
				<h1 class="login__heading">Регистрация</h1>
				<input 
					v-model="currentLogin" 
					class="login__input" 
					type="text" 
					name="login" 
					placeholder="Имя пользователя"
				>
				<input 
					v-model="currentPassword" 
					class="login__input" 
					type="password" 
					name="password" 
					placeholder="Пароль"
				>
				<input 
					v-model="currentPassConfirmation" 
					class="login__input" 
					type="password" 
					name="password" 
					placeholder="Подтверждение пароля"
				>
				<button 
					@click="goToChats" 
					class="login__submit" 
					type="button"
				>
					Регистрация
				</button>
			</form>
			<span class="login__or">Или</span>
			<button 
				@click="register = !register" 
				class="login__toggle"
			>
				{{ register ? 'Вход' : 'Регистрация' }}
			</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@import "../styles/main";
	
	.wrapper {
		height: 100%;
		padding: 5% 10%;
		background-color: #fff;
		background-image: 
			url('../assets/1.svg'),
			url('../assets/pattern.svg');
		background-size: 
			160px,
			cover;
		background-repeat: 
			no-repeat,
			no-repeat;
		background-position: 
			50% 10%,
	}
	
	.login {
		color: #000;
		&__languages {
			@include list-reboot();
			margin-top: 120px;
			text-align: center;
		}
		
		&__language {
			display: inline-block;
			vertical-align: top;
			margin: 0 12px;
		}
		
		&__flag {
			display: block;
			font-size: 0;
			width: 28px;
			height: 28px;
			border-radius: 50%;
			background-size: contain;
			background-repeat: no-repeat;
			opacity: .45;
			
			&--ru {
				background-image: url('../assets/flag-russia.svg');
			}
			
			&--en {
				background-image: url('../assets/flag-us.svg');
			}
			
			&--active {
				opacity: 1;
			}
			
		}
		
		&__heading {
			text-align: center;
			font-size: 28px;
			margin-top: 21px;
			margin-bottom: 30px;
		}
		
		&__input {
			display: block;
			text-align: center;
			border-radius: 7px;
			padding: 10px 10px 10px;
			border: none;
			background: rgba($dark, .15);
			color: rgba(#000, 1);
			font-size: 14px;
			margin: 20px auto 0;
			width: 80%;
			border: 1px solid transparent;
			
			&:focus {
				outline: none;
				border: 1px solid $dark;
				background-color: rgba(#fff, .6);
				color: #000;
				
				&::placeholder {
					color: rgba(0, 0, 0, 0.767);
					font-size: 14px;
				}
			}
			
			&::placeholder {
				color: rgba(#000, .5);
				font-size: 14px;
			}
		}
		
		&__submit {
			display: block;
			margin: 20px auto 0;
			padding: 10px 50px 9px;
			border-radius: 20px;
			background: none;
			border: 1px solid #000;
			color: #000;
			font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
			font-size: 12px;
		}
		
		&__or {
			margin: 25px auto 0;
			width:	100%;
			display: flex;
			justify-content: center;
			text-transform: uppercase;
			font-family: 'Geometria', Arial, Helvetica, sans-serif;
			opacity: .3;
			font-size: 10px;
			
			&::before,
			&::after {
				position: relative;
				top: 6px;
				content: "";
				flex-grow: 1;
				background-color: #000;
				height: 1px;
			}
			
			&::before {
				margin-right: 10px;
			}
			&::after {
				margin-left: 10px;
			}
		}
		
		&__socials {
			@include list-reboot();
			text-align: center;
			margin-top: 8px;
		}
		
		&__social {
			display: inline-block;
			vertical-align: top;
			margin: 5px;
		}
		
		&__social-icon {
			display: block;
			font-size: 0;
			width: 25px;
			height: 25px;
			border-radius: 50%;
			background-color: #fff;
			background-size: initial;
			background-repeat: no-repeat;
			background-position: 50% 50%;
			
			&--vk {
				background-image: url('../assets/vk.svg');
				background-size: 15px;
			}
			
			&--google {
				background-image: url('../assets/google.svg');
				background-size: 11px;
			}
			
			&--fb {
				background-image: url('../assets/fb.svg');
				background-size: 8px;
			}
		}
		
		&__toggle {
			display: block;
			margin: 18px auto 13px;
			background: none;
			/*border: 1px solid #fff;*/
			border: none;
			color: #000;
			font-family: 'Geometria Medium', Arial, Helvetica, sans-serif;
			font-size: 12px;
		}
	}

</style>

<script>	
	export default {
		data() {
			return {
				register: false,
				currentLogin: '',
				currentPassword: '',
				currentPassConfirmation: '',
			}
		},
		methods: {
			goToChats () {
				this.$router.push('chats');
			}
		}
	}
</script>