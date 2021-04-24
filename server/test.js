const bcrypt = require("bcryptjs");
const password = "asd123";
const hash = "$2a$10$Nf4O2fHljRn9LZr1NfrR3eeXMr9Z8zK4U7LQ1cAmgYn9i3LPKzhYq";
const hashpassword = async (pass) => {
	const a = bcrypt.hashSync(pass, 10);
	return a;
};
const checkPass = (hash) => {
	return bcrypt.compareSync(password, hash);
};
console.log(hashpassword(password));
console.log(checkPass(hash));
