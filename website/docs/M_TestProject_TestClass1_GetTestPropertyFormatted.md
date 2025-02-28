import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# GetTestPropertyFormatted Method


Gets a string representing Test



## Definition
**Namespace:** <a href="N_TestProject">TestProject</a>  
**Assembly:** TestProject (in TestProject.exe) Version: 1.0.0+ed74aaa27d13e7636b8d00b6a3f7fb9291dc0d72

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public string GetTestPropertyFormatted(
	params string[] args
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function GetTestPropertyFormatted ( 
	ParamArray args As String()
) As String
```
</TabItem>
<TabItem value="ManagedCPlusPlus" label="ManagedCPlusPlus">
```ManagedCPlusPlus
public:
String^ GetTestPropertyFormatted(
	... array<String^>^ args
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member GetTestPropertyFormatted : 
        args : string[] -> string 
```
</TabItem>
</Tabs>



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
