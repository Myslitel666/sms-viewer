<script lang="ts">
	import { EnvelopeIcon } from 'svelte-elegant/icons-elegant';
	import type { IColorThemeStore } from "svelte-elegant/interfaces";
	import { themeStore } from "svelte-elegant/stores/themeStore";
	import { 
		TextField, 
		Button 
	} from 'svelte-elegant';

	//Импорт утилит
	import { valueExtractors as extractors } from "svelte-elegant/utils";

	let theme: IColorThemeStore | undefined;
	let phone = '';

	// Подписываемся на изменения темы
	themeStore.subscribe(value => {
		theme = value; //Инициализация объекта темы
	});

	function formatNumber(phone: string) {
		const len = phone.length;
		let formatPhone = ''; 

		switch (len) {
			case 1: 
				formatPhone = `(${phone[0]}`;
				break;
			case 2: 
				formatPhone = `(${phone[0]}${phone[1]}`;
				break;
			case 3: 
				formatPhone = `(${phone[0]}${phone[1]}${phone[2]}`;
				break;
			case 4: 
				formatPhone = `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}`;
				break;
			case 5: 
				formatPhone = `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}`;
				break;
			case 6: 
				formatPhone = `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]}`;
				break;
			case 7: 
				formatPhone = `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]} ${phone[6]}`;
				break;
			case 8: 
				formatPhone = `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]} ${phone[6]}${phone[7]}`;
				break;
			case 9: 
				formatPhone = `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]} ${phone[6]}${phone[7]}-${phone[8]}`;
				break;
			case 10: 
				formatPhone = `(${phone[0]}${phone[1]}${phone[2]}) ${phone[3]}${phone[4]}${phone[5]} ${phone[6]}${phone[7]}-${phone[8]}${phone[9]}`;
				break;
		}

		console.log('DDD')
		return formatPhone;
	}
</script>

<div class = content>
	<div
		class = vertical-magin
		style:width = 24.1rem
	>
		<div 
			class = logo
		>
			<div
				style:background-color = {theme?.colors.primary}
				style:padding = 1.5rem
				style:border-radius = 50%
			>
				<EnvelopeIcon 
					fill = 'none'
					stroke = {theme?.colors.background}
					size = 4.25rem
				/>
			</div>
			<p
				id = 'title'
				style:color = {theme?.colors.primary}
			>
				SMS Viewer
			</p>
		</div>
		<div 
			style:align-self = flex-start
			style:font-weight = 600
		>
			Enter your phone number
		</div>
		<p style:color = #6b6b6b>
			Enter the phone number to view the SMS.
		</p>
		<div style:display = flex>
			<div 
				style:display = flex
				style:align-items = center
				style:gap = 0.45rem
				style:background-color = {theme?.disabled.touch}
				style:border = {`1px solid ${theme?.border.disabled.color}`}
				style:height = {theme?.controls.height}
				style:border-radius = {theme?.border.borderRadius}
				style:margin-right = 0.58rem
				style:padding = 0.45rem
				style:box-sizing = border-box
			>
				<img 
					src = 'ru.png'
					alt = ru 
					height = 100%
				/>
				<p>+7</p>
			</div>
			<TextField 
				bind:value = {phone}
				width = 100% 
				label = '(XXX) XXX XX-XX' 
				oninput={(e: Event) => {
					phone = extractors.getInputValue(e); //Извлечение значения
					phone = phone.replace(/\D/g, '');

					if (phone.length !== 0) {
						phone = formatNumber(phone);
					}
				}}
				maxlength=15
			/>
		</div>
		<Button width = 100%>
			Next
		</Button>
	</div>
</div>

<style>
	.logo {
		display: flex; /* Активируем flexbox */
		align-items: center;
		gap: 1rem;
	}

	.content {
		padding: 1rem;
		display: flex; /* Активируем flexbox */
		justify-content: center;
		align-items: center;
		height: 75vh;
	}

	.vertical-magin {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}

	#title {
		font-size: 2.88rem;
	}

	@media (max-width: 420px) {
		/* Дополнительные изменения для маленьких экранов */
		#title {
			font-size: 2.5rem; /* Уменьшаем отступы */
		}
	}
</style>
