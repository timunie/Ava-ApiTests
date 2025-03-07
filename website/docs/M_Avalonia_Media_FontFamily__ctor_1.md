# FontFamily(Uri, String) Constructor


Initializes a new instance of the <a href="T_Avalonia_Media_FontFamily">FontFamily</a> class.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public FontFamily(
	Uri? baseUri,
	string name
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub New ( 
	baseUri As Uri,
	name As String
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
new : 
        baseUri : Uri * 
        name : string -> FontFamily
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FontFamily.cs#L32" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.uri" target="_blank" rel="noopener noreferrer">Uri</a></dt><dd>Specifies the base uri that is used to resolve font family assets.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The name of the <a href="T_Avalonia_Media_FontFamily">FontFamily</a>.</dd></dl>

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td>Base uri must be an absolute uri.</td>
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Media_FontFamily">FontFamily Class</a>  
<a href="Overload_Avalonia_Media_FontFamily__ctor">FontFamily Overload</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
