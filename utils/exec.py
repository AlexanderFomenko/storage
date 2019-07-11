from subprocess import PIPE, Popen


class Executor:
    @staticmethod
    def exec(cmd, timeout=150):
        with Popen(cmd, stdout=PIPE, stderr=PIPE, shell=True) as proc:
            out, err = proc.communicate(timeout=timeout)
            if err:
                raise Exception(err.decode(errors="replace").strip(" \n\t"))
            return out.decode(errors="replace").strip(" \n\t")

