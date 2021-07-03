const globalVariable = 'Ma aflu in contextul global';

if (true) {
  const localVariable = 'Ma aflu in contextul local';
  const globalVariable = 'Nu ma aflu in contextul global';

  console.log(globalVariable);
  console.log(localVariable);
}

console.log(globalVariable);
