from subprocess import check_output

def ls():
    ls_ans = check_output('ls -la', shell=True)
    return ls_ans