from nltk.tokenize import sent_tokenize, word_tokenize
key_1 = ["daftar", "pendaftaran", "proposal",
         "outline", "tugas", "akhir", "ta"]
key_2 = ["cek", "status", "proposal", "outline",
         "tugas", "akhir", "ta", "diterima"]
key_3 = ["cek", "jadwal", "seminar", "kerja", "praktek", "praktik", "kp"]
key_4 = ["sudah", "udah"]
key_5 = ["belum"]
key_6 = ["makasih", "thankyou", "terimakasih", "terima", "kasih"]
key_7 = ["16522002"]
key_8 = ["setelah", "habis", "itu"]
key_9 = ["syarat", "syaratnya"]
key_95 = ["tidak", "enggak", "engga", "ngga", "nggak", "oke", "okee"]
ans_1 = ("Daftar outline tugas akhir di link s.id/tiuii02 ya... ")
ans_2 = ("Coba dicek di link s.id/tiuii03 ya... ")
ans_3 = ("Coba dicek di link s.id/seminarkp2 ya... ")
ans_4 = ("NIM nya berapa ya? ")
ans_5 = ("Udah daftar di link s.id/tiuii02? ")
ans_6 = ("Udah daftar di link s.id/seminarkp1? ")
ans_7 = ("Laporan KP sudah ditandatangani oleh dosen pembimbing KP.")
ans_8 = ("Daftar dulu di link s.id/tiuii02 ya... ")
ans_9 = ("Outline sudah diterima. Silahkan membayar TA di loket Rektorat kemudian mengambil surat bimbingan di Prodi. ")
ans_10 = ("Outline sedang dikaji. Ditunggu beberapa hari lagi ya... ")
ans_11 = ("Daftar dulu di link s.id/seminarkp1 ya... ")
ans_12 = ("Hardfile dikumpul di Prodi. Ditunggu beberapa hari lagi ya, nanti dicek di link s.id/tiuii03.")
ans_13 = ("Ditunggu jadwalnya di link s.id/seminarkp2 ya, nanti ada pemberitahuan lewat email UII.")
ans_98 = ("Mohon maaf, ulangi pertanyaannya ya... ")
ans_99 = ("Okee, terimakasih ya...")

print("Mas Faisal: Halo, dengan siapa ini?")
nama = input('Kamu: ')
print("Mas Faisal: Halo " + nama + ", Gimana?")


def respon_daftar_outline():
    flag = True
    print('Mas Faisal: ' + ans_1)
    while(flag == True):
        reply2 = input('Kamu: ')
        score_2 = 0
        score_3 = 0
        score_4 = 0
        score_5 = 0
        score_6 = 0
        score_7 = 0
        score_95 = 0
        k_r2 = []
        k_r2.append(reply2.lower())
        tokenised2 = []
        for w in k_r2:
            tokenised2.append(word_tokenize(w))
            for w in tokenised2:
                for x in w:
                    for a2 in key_2:
                        if x == a2:
                            score_2 += 1
                    for a3 in key_3:
                        if x == a3:
                            score_3 += 1
                    for a4 in key_4:
                        if x == a4:
                            score_4 += 1
                    for a5 in key_5:
                        if x == a5:
                            score_5 += 1
                    for a6 in key_6:
                        if x == a6:
                            score_6 += 1
                    for a7 in key_7:
                        if x == a7:
                            score_7 += 1
                    for a95 in key_95:
                        if x == a95:
                            score_95 += 1
            if (score_6 > score_2 and score_6 > score_3 and score_6 > score_4 and score_6 > score_5 and score_6 > score_7 and score_6 > score_95):
                print('Mas Faisal: Sama-sama... ')
            elif (score_95 > score_2 and score_95 > score_3 and score_95 > score_4 and score_95 > score_5 and score_95 > score_6 and score_95 > score_7):
                print('Mas Faisal: Sip...')
            elif (score_2 > score_3):
                respon_cek_outline()
            elif (score_3 > score_2):
                respon_cek_seminar()
            elif(reply2 == 'bye'):
                print('Mas Faisal: ' + ans_99)
                quit()
            else:
                print('Mas Faisal: ' + ans_98)


def respon_cek_outline():
    flag = True
    print('Mas Faisal: ' + ans_5)
    while(flag == True):
        reply3 = input('Kamu: ')
        score_1 = 0
        score_2 = 0
        score_3 = 0
        score_4 = 0
        score_5 = 0
        score_6 = 0
        score_7 = 0
        score_8 = 0
        score_95 = 0
        k_r3 = []
        k_r3.append(reply3.lower())
        tokenised3 = []
        for w in k_r3:
            tokenised3.append(word_tokenize(w))
            for w in tokenised3:
                for x in w:
                    for a1 in key_1:
                        if x == a1:
                            score_1 += 1
                    for a2 in key_2:
                        if x == a2:
                            score_2 += 1
                    for a3 in key_3:
                        if x == a3:
                            score_3 += 1
                    for a4 in key_4:
                        if x == a4:
                            score_4 += 1
                    for a5 in key_5:
                        if x == a5:
                            score_5 += 1
                    for a6 in key_6:
                        if x == a6:
                            score_6 += 1
                    for a7 in key_7:
                        if x == a7:
                            score_7 += 1
                    for a8 in key_8:
                        if x == a8:
                            score_8 += 1
                    for a95 in key_95:
                        if x == a95:
                            score_95 += 1
        if (score_4 > score_1 and score_4 > score_5 and score_4 > score_6 and score_4 > score_7 and score_4 > score_95):
            print('Mas Faisal: ' + ans_4)
        elif (score_5 > score_1 and score_5 > score_4 and score_5 > score_6 and score_5 > score_7 and score_5 > score_95):
            print('Mas Faisal: ' + ans_8)
        elif (score_7 > score_3 and score_7 > score_4 and score_7 > score_5 and score_7 > score_6 and score_7 > score_95):
            print('Mas Faisal: ' + ans_9)
        elif (score_95 > score_1 and score_95 > score_4 and score_95 > score_5 and score_95 > score_6 and score_95 > score_7):
            print('Mas Faisal: Sip... ')
        elif (score_6 > score_1 and score_6 > score_4 and score_6 > score_5 and score_6 > score_7 and score_6 > score_95):
            print('Mas Faisal: Sama-sama...')
        elif (score_8 > score_1 and score_8 > score_4 and score_8 > score_5 and score_8 > score_7 and score_8 > score_95):
            print('Mas Faisal: ' + ans_12)
        elif (score_1 > score_3 and score_1 > score_2):
            respon_daftar_outline()
        elif (score_3 > score_1 and score_3 > score_2):
            respon_cek_seminar()
        elif (score_2 > score_1 and score_2 > score_3):
            respon_cek_outline()
        elif(reply3 == 'bye'):
            print('Mas Faisal: ' + ans_99)
            quit()
        elif(score_7 == 0):
            print('Mas Faisal: ' + ans_10)
        else:
            print('Mas Faisal: ' + ans_98)


def respon_cek_seminar():
    flag = True
    print('Mas Faisal: ' + ans_6)
    while(flag == True):
    reply4 = input('Kamu: ')
    score_1 = 0
    score_2 = 0
    score_3 = 0
    score_4 = 0
    score_5 = 0
    score_6 = 0
    score_7 = 0
    score_8 = 0
    score_9 = 0
    score_95 = 0
    k_r4 = []
    k_r4.append(reply4.lower())
    tokenised4 = []
    for w in k_r4:
    tokenised4.append(word_tokenize(w))
    for w in tokenised4:
    for x in w:
    for a1 in key_1:
    if x == a1:
    score_1 += 1
    for a2 in key_2:
    if x == a2:
    score_2 += 1
    for a3 in key_3:
    if x == a3:
    score_3 += 1
    for a4 in key_4:
    if x == a4:
    score_4 += 1
    for a5 in key_5:
    if x == a5:
        62
    score_5 += 1
    for a6 in key_6:
    if x == a6:
    score_6 += 1
    for a7 in key_7:
    if x == a7:
    score_7 += 1
    for a8 in key_8:
    if x == a8:
    score_8 += 1
    for a9 in key_9:
    if x == a9:
    score_9 += 1
    for a95 in key_95:
    if x == a95:
    score_95 += 1
    if (score_95 > score_4 and score_95 > score_5 and score_95 > score_6):
    print('Mas Faisal: Sip... ')
    elif (score_5 > score_4 and score_5 > score_6 and score_5 > score_95):
    print('Mas Faisal: ' + ans_11)
    elif (score_4 > score_5 and score_4 > score_6 and score_4 > score_95):
    print('Mas Faisal: ' + ans_3)
    elif (score_6 > score_4 and score_6 > score_5 and score_6 > score_95):
    print('Mas Faisal: Sama-sama...')
    elif (score_8 > score_4 and score_8 > score_5 and score_8 > score_95):
    print('Mas Faisal: ' + ans_13)
    elif (score_9 > score_4 and score_9 > score_5 and score_9 > score_95):
    print('Mas Faisal: ' + ans_7)
    elif (score_1 > score_2 and score_1 > score_3):
    respon_daftar_outline()63
    elif (score_2 > score_1 and score_2 > score_3):
    respon_cek_outline()
    elif (score_3 > score_1 and score_3 > score_2):
    respon_cek_seminar()
    elif(reply4 == 'bye'):
    print('Mas Faisal: ' + ans_99)
    quit()
    else:
    print('Mas Faisal: ' + ans_98)
    first = True
    while(first == True):
    score_1 = 0
    score_2 = 0
    score_3 = 0
    reply = input('Kamu: ')
    k_r = []
    k_r.append(reply.lower())
    tokenised = []
    for w in k_r:
    tokenised.append(word_tokenize(w))
    for w in tokenised:
    for x in w:
    for a1 in key_1:
    if x == a1:
    score_1 += 1
    for a2 in key_2:
    if x == a2:
    score_2 += 164
    for a3 in key_3:
    if x == a3:
    score_3 += 1
    if (score_1 > score_2 and score_1 > score_3):
    respon_daftar_outline()
    elif (score_2 > score_1 and score_2 > score_3):
    respon_cek_outline()
    elif (score_3 > score_1 and score_3 > score_2):
    respon_cek_seminar()
    elif(reply == 'bye'):
    first = False
    print('Mas Faisal: ' + ans_99)
    quit()
    else:
    print('Mas Faisal: ' + ans_98)
    first = True
