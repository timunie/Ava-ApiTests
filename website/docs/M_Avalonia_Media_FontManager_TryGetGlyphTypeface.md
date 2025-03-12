# TryGetGlyphTypeface Method


Tries to get a glyph typeface for specified typeface.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryGetGlyphTypeface(
	Typeface typeface,
	out IGlyphTypeface?? glyphTypeface
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryGetGlyphTypeface ( 
	typeface As Typeface,
	<OutAttribute> ByRef glyphTypeface As IGlyphTypeface
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryGetGlyphTypeface : 
        typeface : Typeface * 
        glyphTypeface : IGlyphTypeface byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FontManager.cs#L92" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="T_Avalonia_Media_Typeface">Typeface</a></dt><dd>The typeface.</dd><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd>The created glyphTypeface</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`True`, if the <a href="T_Avalonia_Media_FontManager">FontManager</a> could create the glyph typeface, `False` otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Media_FontManager">FontManager Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

