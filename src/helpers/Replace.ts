/*
Esse helper server para ser utilizado quando um atributo é obrigatório, mas
por algum motivo foi necessário utiliza-lo sem obrigatoriedade, como em um teste, por exemplo


Na prática, quando eu chamar este Replace, irei colocar minha interface, que contém os atributos tipados,
vou desetruturar e pegar um desses atributos para torna-lo não obrigatório... ou apenas mudar o tipo dele.
*/

export type Replace<T, R> = Omit<T, keyof R> & R;
