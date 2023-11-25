Gera uma Sequência de Caracteres ALEATÓRIOS Codificados em base64 com 200 Bits
OBS: Isso vai Gerar com Várias QUEBRAS de LINHAS:
openssl rand -base64 200 > pem_pass_phrase.txt

RETIRA as QUEBRAS de LINHAS do ARQUIVO dos Caracteres ALEATÓRIOS e CODIFICA em base64:
base64 -w 0 pem_pass_phrase.txt > pem_pass_phrase-one-line.txt

Gera uma Chave PRIVADA Protegida com SENHA
OBS: Usar a Senha do ARQUIVO "pem_pass_phrase-one-line.txt"
openssl genpkey -algorithm RSA -out private_key.pem -aes256

Gera uma Chave PÚBLICA a partir da Chave PRIVADA
OBS: Se ela for CRIPTOGRAFADA, irá pedir a SENHA Correta:
openssl rsa -pubout -in private_key.pem -out public_key.pem

DESCRIPTOGRAFA a Chave PRIVADA:
openssl pkey -in private_key.pem -out decrypted_private_key.pem

RETIRA as QUEBRAS de LINHAS do ARQUIVO da Chave PRIVADA DESCRIPTOGRAFADA e CODIFICA em base64
OBS IMPORTANTE: Usar ESSA Chave DESCRIPTOGRAFADA no privateKey do JWT: !!!!!
base64 -w 0 decrypted_private_key.pem > token_private_key.txt

RETIRA as QUEBRAS de LINHAS do ARQUIVO da Chave PÚBLICA e CODIFICA em base64
OBS IMPORTANTE: Usar ESSA Chave PÚBLICA no publicKey do JWT: !!!!!
base64 -w 0 public_key.pem > token_public_key.txt
