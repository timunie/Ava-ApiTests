# GetTestPropertyFormatted Method


Gets a string representing Test



## Definition
**Namespace:** <a href="N_TestProject">TestProject</a>  
**Assembly:** TestProject (in TestProject.exe) Version: 1.0.0+ecdc54db18b7f1ab8ec75f629a4f094efff2e57b

**C#**
``` C#
public string GetTestPropertyFormatted(
	params string[] args
)
```
**VB**
``` VB
Public Function GetTestPropertyFormatted ( 
	ParamArray args As String()
) As String
```
**C++**
``` C++
public:
String^ GetTestPropertyFormatted(
	... array<String^>^ args
)
```
**F#**
``` F#
member GetTestPropertyFormatted : 
        args : string[] -> string 
```



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>[]</dt><dd>The format arguments</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
the formatted string

## Remarks
Nothing else to say: true

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.nullreferenceexception" target="_blank" rel="noopener noreferrer">NullReferenceException</a></td>
<td>In case <a href="P_TestProject_TestClass1_TestProperty">TestProperty</a> is null</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_TestProject_TestClass1">TestClass1 Class</a>  
<a href="N_TestProject">TestProject Namespace</a>  
