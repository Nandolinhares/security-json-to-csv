import React from 'react'
import { CalopsitaCsv } from './calopsita-csv'

const CalopsitaButton: React.FC = () => {
  const filename = 'teste';
  const values = [
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste12',
      email: 'teste22',
      password: 'teste32'
    },
    {
      name: 'teste13',
      email: 'teste23',
      password: 'teste33'
    },
    {
      name: 'teste14',
      email: 'teste24',
      password: 'teste34',
      testando: 'oi'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste12',
      email: 'teste22',
      password: 'teste32'
    },
    {
      name: 'teste13',
      email: 'teste23',
      password: 'teste33'
    },
    {
      name: 'teste14',
      email: 'teste24',
      password: 'teste34',
      testando: 'oi'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste12',
      email: 'teste22',
      password: 'teste32'
    },
    {
      name: 'teste13',
      email: 'teste23',
      password: 'teste33'
    },
    {
      name: 'teste14',
      email: 'teste24',
      password: 'teste34',
      testando: 'oi'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste12',
      email: 'teste22',
      password: 'teste32'
    },
    {
      name: 'teste13',
      email: 'teste23',
      password: 'teste33'
    },
    {
      name: 'teste14',
      email: 'teste24',
      password: 'teste34',
      testando: 'oi'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste12',
      email: 'teste22',
      password: 'teste32'
    },
    {
      name: 'teste13',
      email: 'teste23',
      password: 'teste33'
    },
    {
      name: 'teste14',
      email: 'teste24',
      password: 'teste34',
      testando: 'oi'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    }
    ,
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31',
      testando: 'ewfwef',
      oi: 'fewfwe'
    },
    {
      name: 'teste11',
      email: 'teste21',
      password: 'teste31',
      oi: 'fewfwe'
    }
  ]
  const handleClick = async (): Promise<any> => {
    const calopsitaCsv = new CalopsitaCsv();
   
    await calopsitaCsv.convertJsonToCsv(values, filename, 'password');
  }
  return(
    <button onClick={handleClick}>Converter</button>
  )
}

export default CalopsitaButton