# AddFontCollection Method


Add a font collection to the manager.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public void AddFontCollection(
	IFontCollection fontCollection
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Sub AddFontCollection ( 
	fontCollection As IFontCollection
)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member AddFontCollection : 
        fontCollection : IFontCollection -> unit 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FontManager.cs#L181" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Fonts_IFontCollection">IFontCollection</a></dt><dd>The font collection.</dd></dl>If a font collection's key is already present the collection is replaced.

## Exceptions
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.argumentexception" target="_blank" rel="noopener noreferrer">ArgumentException</a></td>
<td />
</tr>
</table>

## See Also


#### Reference
<a href="T_Avalonia_Media_FontManager">FontManager Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
