# TryMatchCharacter Method


Tries to match a specified character to a <a href="T_Avalonia_Media_Typeface">Typeface</a> that supports specified font properties.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public bool TryMatchCharacter(
	int codepoint,
	FontStyle fontStyle,
	FontWeight fontWeight,
	FontStretch fontStretch,
	FontFamily? fontFamily,
	CultureInfo? culture,
	out Typeface? typeface
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Function TryMatchCharacter ( 
	codepoint As Integer,
	fontStyle As FontStyle,
	fontWeight As FontWeight,
	fontStretch As FontStretch,
	fontFamily As FontFamily,
	culture As CultureInfo,
	<OutAttribute> ByRef typeface As Typeface
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
member TryMatchCharacter : 
        codepoint : int * 
        fontStyle : FontStyle * 
        fontWeight : FontWeight * 
        fontStretch : FontStretch * 
        fontFamily : FontFamily * 
        culture : CultureInfo * 
        typeface : Typeface byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FontManager.cs#L227" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The codepoint to match against.</dd><dt>  <a href="T_Avalonia_Media_FontStyle">FontStyle</a></dt><dd>The font style.</dd><dt>  <a href="T_Avalonia_Media_FontWeight">FontWeight</a></dt><dd>The font weight.</dd><dt>  <a href="T_Avalonia_Media_FontStretch">FontStretch</a></dt><dd>The font stretch.</dd><dt>  <a href="T_Avalonia_Media_FontFamily">FontFamily</a></dt><dd>The font family. This is optional and used for fallback lookup.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The culture.</dd><dt>  <a href="T_Avalonia_Media_Typeface">Typeface</a></dt><dd>The matching <a href="T_Avalonia_Media_Typeface">Typeface</a>.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`True`, if the <a href="T_Avalonia_Media_FontManager">FontManager</a> could match the character to specified parameters, `False` otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Media_FontManager">FontManager Class</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

