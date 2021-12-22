const data = [
  { val: '0', id: 'to0', label: 'O' },
  { val: '45', id: 'to45', label: '45' },
  { val: '90', id: 'to90', label: '90' },
  { val: '135', id: 'to135', label: '135' },
  { val: '180', id: 'to180', label: '180' },
  { val: '225', id: 'to225', label: '225' },
  { val: '270', id: 'to270', label: '270' },
  { val: '315', id: 'to315', label: '315' },
];

const DegresButtons = () => (
  <div class="buttons group">
    {data.map((el) => (
      <button class="button button-degres" value={el.val} key={el.id}>{el.label}</button>
    ))}
  </div>
);

export default DegresButtons;
