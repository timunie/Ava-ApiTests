# Parse(String, Uri) Method


Parses a <a href="T_Avalonia_Media_FontFamily">FontFamily</a> string.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public static FontFamily Parse(
	string s,
	Uri? baseUri
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Shared Function Parse ( 
	s As String,
	baseUri As Uri
) As FontFamily
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
static member Parse : 
        s : string * 
        baseUri : Uri -> FontFamily 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FontFamily.cs#L182" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The <a href="T_Avalonia_Media_FontFamily">FontFamily</a> string.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a></dt><dd>Specifies the base uri that is used to resolve font family assets.</dd></dl>

#### Return Value
<a href="T_Avalonia_Media_FontFamily">FontFamily</a>  


## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>Specified family is not supported.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Media_FontFamily">FontFamily Class</a>  
<a href="Overload_Avalonia_Media_FontFamily_Parse">Parse Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

