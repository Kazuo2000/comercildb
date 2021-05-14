import * as React from "react";
import { View, Text,TextInput,Picker } from "react-native";
import { styleFormat } from "../css/styles";
import { ScrollView } from "react-native-gesture-handler";

let us = "";
let sh="";

let nc="";
let  cf="";
let  sx="";
let at="";
let iu="";
let ie="";
let ic="";

let lg= "";
let nr ="";
let cp ="";
let br ="";
let ce ="";

let tl="";
let em="";


export default function Cadastro() {

  const [usuario,setUsuario] = React.useState("");
  const [senha,setSenha] = React.useState("");

  const [nomecliente,setNomeCliente] = React.useState("");
  const [cpf,setCPF] = React.useState("");
  const [sexo,setSexo] = React.useState("");

  const [logradouro ,setlogradouro] = React.useState("");
  const [numero ,setNumro] = React.useState("");
  const [complemento ,setComplemento] = React.useState("");
  const [bairro ,setBairro] = React.useState("");
  const [cep ,setCEP] = React.useState("");

  const [telefone ,setTelefone] = React.useState("");
  const [email ,setEmail] = React.useState("");
  







  return (
    <View>

      <ScrollView horizontal={false}>


    {/* area de cadastro de usuario */}
    <View>
      <TextInput style={styleFormat.TextInput}
      placeholder="Nome Usuario"
      value={usuario} keyboardType="email-address"
      onChangeText={(value)=>setUsuario(value)}
      />


      <TextInput style={styleFormat.TextInput}
      placeholder="Senha"
      value={senha} keyboardType="defult"
      secureTextEntry
      onChangeText={(value)=>setSenha(value)}
      />
    </View>
    {/*fim da area de cadastro de usuario*/}

    {/* area de cadastro do cliente */}
    <View>
    <TextInput style={styleFormat.TextInput}
      placeholder="Nome Cliente"
      value={nomecliente} keyboardType="default"
      onChangeText={(value)=>setNomeCliente(value)}

      />


      <TextInput style={styleFormat.TextInput}
      placeholder="CPF"
      value={cpf} keyboardType="number-pad"
      onChangeText={(value)=>setCPF(value)}
      />

    </View>
    {/* fim area de cadastro do cliente */}


    {/* area de cadastro de endereço */}
    <View>

    <TextInput style={styleFormat.TextInput}
      placeholder="Logradouro"
      value={logradouro} keyboardType="email-address"
      onChangeText={(value)=>setlogradouro(value)}
      />


      <TextInput style={styleFormat.TextInput}
      placeholder="Numero"
      value={numero} keyboardType="default"
      onChangeText={(value)=>setNumero(value)}
      />


      <TextInput style={styleFormat.TextInput}
      placeholder="Bairro"
      value={bairro} keyboardType="email-address"
      onChangeText={(value)=>setBairro(value)}
      />


      <TextInput style={styleFormat.TextInput}
      placeholder="CEP"
      value={cep} keyboardType="number-pad"
      onChangeText={(value)=>setCEP(value)}
      />

    </View>
    {/* fim  da area cadastro do endereço */}
    
    
    {/* area de cadastro de contato */}
    <View>

    <TextInput style={styleFormat.TextInput}
      placeholder="Telefone"
      value={telefone} keyboardType="number-pad"
      onChangeText={(value)=>setTelefone(value)}
      />

    <TextInput style={styleFormat.TextInput}
      placeholder="E-mail"
      value={email} keyboardType="email-address"
      onChangeText={(value)=>setEmail(value)}
      />

    </View>
    {/* Fim da area de cadastro do contato */}


    <TouchableOpacity style={styleFormat.btnCadastro}>
      <Text style={styleFormat.txtCadastro}> Cadastrar </Text>
    </TouchableOpacity>
        
    </ScrollView>

    </View>
  );
}
