import { useState } from 'react';
import { formatDate } from './utils';
import style from './App.module.css';

export const App = () => {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');

	const validate = (val) => val.length >= 3;

	const onInputButtonClick = () => {
		let promptValue = prompt('Введите слово');
		if (validate(promptValue)) {
			setValue(promptValue);
			setError('');
		} else {
			setError('Введенное значение должно содержать минимум 3 символа');
		}
	};

	const onAddButtonClick = () => {
		const updatedList = [...list, { id: Date.now(), value, date: new Date() }];
		if (!validate(value)) return;
		setList(updatedList);
		setValue('');
		setError('');
	};

	const isValueVaild = validate(value);

	return (
		<div className={style.app}>
			<h1 className={style['page - heading']}>Ввод значения</h1>
			<p className={style['no - margin - text']}>
				Текущее значение <code>value</code>: "<output className={style['current - value']}>{value}</output>"
			</p>
			{error !== '' ? <div className={style.error}>{error}</div> : ''}
			<div className={style['buttons - container']}>
				<button className={style.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button className={style.button} onClick={onAddButtonClick} disabled={!isValueVaild}>
					Добавить в список
				</button>
			</div>
			<div className={style['list - container']}>
				<h2 className={style['list - heading']}>Список:</h2>
				{list.length > 0 ? (
					<ul className={style.list}>
						{list.map((element) => (
							<li className={style['list - item']} key={element.id}>
								{element.value} (<time>{formatDate(element.date)}</time>)
							</li>
						))}
					</ul>
				) : (
					<p className={style['no - margin - text']}>Нет добавленных элементов</p>
				)}
			</div>
		</div>
	);
};
