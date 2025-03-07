# TryCreateGlyphTypeface(Stream, FontSimulations, IGlyphTypeface) Method


Tries to create a glyph typeface from specified stream.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool TryCreateGlyphTypeface(
	Stream stream,
	FontSimulations fontSimulations,
	out IGlyphTypeface?? glyphTypeface
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryCreateGlyphTypeface ( 
	stream As Stream,
	fontSimulations As FontSimulations,
	<OutAttribute> ByRef glyphTypeface As IGlyphTypeface
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryCreateGlyphTypeface : 
        stream : Stream * 
        fontSimulations : FontSimulations * 
        glyphTypeface : IGlyphTypeface byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IFontManagerImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.io.stream" target="_blank" rel="noopener noreferrer">Stream</a></dt><dd>A stream that holds the font's data.</dd><dt>  <a href="T_Avalonia_Media_FontSimulations">FontSimulations</a></dt><dd>Specifies algorithmic style simulations.</dd><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd>The created glyphTypeface</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`True`, if the <a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl</a> could create the glyph typeface, `False` otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl Interface</a>  
<a href="Overload_Avalonia_Platform_IFontManagerImpl_TryCreateGlyphTypeface">TryCreateGlyphTypeface Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
