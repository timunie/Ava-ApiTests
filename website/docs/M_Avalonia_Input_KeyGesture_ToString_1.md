# ToString(String, IFormatProvider) Method


Returns the current KeyGesture as a string formatted according to the format string and appropriate IFormatProvider



## Definition
**Namespace:** <a href="N_Avalonia_Input">Avalonia.Input</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public string ToString(
	string? format,
	IFormatProvider? formatProvider
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function ToString ( 
	format As String,
	formatProvider As IFormatProvider
) As String
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract ToString : 
        format : string * 
        formatProvider : IFormatProvider -> string 
override ToString : 
        format : string * 
        formatProvider : IFormatProvider -> string 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Input/KeyGesture.cs#L114" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The format to use. <ul>null or "" or "g"The Invariant format, uses Enum.ToString() to format Keys."p"Use platform specific formatting as registerd.</ul></dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.iformatprovider" target="_blank" rel="noopener noreferrer">IFormatProvider</a></dt><dd>The IFormatProvider to use. If null, uses the appropriate provider registered in the Avalonia Locator, or Invariant.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a>  
The formatted string.

#### Implements
<a href="https://learn.microsoft.com/dotnet/api/system.iformattable.tostring" target="_blank" rel="noopener noreferrer">IFormattable.ToString(String, IFormatProvider)</a>  


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.formatexception" target="_blank" rel="noopener noreferrer">FormatException</a></td>
<td>Thrown if the format string is not null, "", "g", or "p"</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Input_KeyGesture">KeyGesture Class</a>  
<a href="Overload_Avalonia_Input_KeyGesture_ToString">ToString Overload</a>  
<a href="N_Avalonia_Input">Avalonia.Input Namespace</a>  

