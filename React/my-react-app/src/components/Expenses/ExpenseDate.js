import './ExpenseDate.css';

function ExpenseDate(props) {
  // const month = props.date.toLocaleDateString('en-US', { month: 'long' });
  // const day = props.date.toLocaleDateString('en-US', { day: '2-digits' });
  // const year = props.date.getFullYear();

  //! ToLocaleDateString method didn't work for some reason.

  const month = props.date.getUTCMonth();
  const day = props.date.getUTCDay();;
  const year = props.date.getFullYear();
  
  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div> 
  );
}

export default ExpenseDate;