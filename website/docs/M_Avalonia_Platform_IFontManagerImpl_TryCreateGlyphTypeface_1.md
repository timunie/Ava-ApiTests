# TryCreateGlyphTypeface(String, FontStyle, FontWeight, FontStretch, IGlyphTypeface) Method


Tries to get a glyph typeface for specified parameters.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool TryCreateGlyphTypeface(
	string familyName,
	FontStyle style,
	FontWeight weight,
	FontStretch stretch,
	out IGlyphTypeface?? glyphTypeface
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryCreateGlyphTypeface ( 
	familyName As String,
	style As FontStyle,
	weight As FontWeight,
	stretch As FontStretch,
	<OutAttribute> ByRef glyphTypeface As IGlyphTypeface
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryCreateGlyphTypeface : 
        familyName : string * 
        style : FontStyle * 
        weight : FontWeight * 
        stretch : FontStretch * 
        glyphTypeface : IGlyphTypeface byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IFontManagerImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.string" target="_blank" rel="noopener noreferrer">String</a></dt><dd>The family name.</dd><dt>  <a href="T_Avalonia_Media_FontStyle">FontStyle</a></dt><dd>The font style.</dd><dt>  <a href="T_Avalonia_Media_FontWeight">FontWeight</a></dt><dd>The font weiht.</dd><dt>  <a href="T_Avalonia_Media_FontStretch">FontStretch</a></dt><dd>The font stretch.</dd><dt>  <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a></dt><dd>The created glyphTypeface</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`True`, if the <a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl</a> could create the glyph typeface, `False` otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl Interface</a>  
<a href="Overload_Avalonia_Platform_IFontManagerImpl_TryCreateGlyphTypeface">TryCreateGlyphTypeface Overload</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
