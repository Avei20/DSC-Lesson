import 'package:flutter/material.dart';

void main() {
  runApp(LoginPage());
}

class LoginPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
        home: SafeArea(child: Scaffold(body: UsernameTextField())));
  }
}

class PokeballImage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Image.network(
        "https://i.pinimg.com/originals/50/e1/db/50e1db4684e6f697f93590950eb832f6.png");
  }
}

// class UsernameTextField extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return Container(
//         margin: EdgeInsets.all(20.0),
//         child: TextField(
//             obscureText: true,,
//             decoration: InputDecoration(
//                 hintText: 'Username',
//                 enabledBorder: OutlineInputBorder(
//                   borderSide: BorderSide(color: Colors.red),
//                   focusedBorder: OutlineInputBorder(
//                       borderSide: BorderSide(color: Colors.red))
//                 )));
//   }
// }

class LoginButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        child: RaisedButton(
            color: Colors.red,
            onPressed: () {
              // anonymous function
              // do something here
            },
            child: Text(
              'Login',
              style: TextStyle(color: Colors.white),
            )));
  }
}
