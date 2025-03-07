# TryMatchCharacter Method


Tries to match a specified character to a typeface that supports specified font properties.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
bool TryMatchCharacter(
	int codepoint,
	FontStyle fontStyle,
	FontWeight fontWeight,
	FontStretch fontStretch,
	CultureInfo? culture,
	out Typeface? typeface
)
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Function TryMatchCharacter ( 
	codepoint As Integer,
	fontStyle As FontStyle,
	fontWeight As FontWeight,
	fontStretch As FontStretch,
	culture As CultureInfo,
	<OutAttribute> ByRef typeface As Typeface
) As Boolean
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
abstract TryMatchCharacter : 
        codepoint : int * 
        fontStyle : FontStyle * 
        fontWeight : FontWeight * 
        fontStretch : FontStretch * 
        culture : CultureInfo * 
        typeface : Typeface byref -> bool 
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IFontManagerImpl.cs" title="View the source code">View Source</a>



#### Parameters
<dl><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.int32" target="_blank" rel="noopener noreferrer">Int32</a></dt><dd>The codepoint to match against.</dd><dt>  <a href="T_Avalonia_Media_FontStyle">FontStyle</a></dt><dd>The font style.</dd><dt>  <a href="T_Avalonia_Media_FontWeight">FontWeight</a></dt><dd>The font weight.</dd><dt>  <a href="T_Avalonia_Media_FontStretch">FontStretch</a></dt><dd>The font stretch.</dd><dt>  <a href="https://learn.microsoft.com/dotnet/api/system.globalization.cultureinfo" target="_blank" rel="noopener noreferrer">CultureInfo</a></dt><dd>The culture.</dd><dt>  <a href="T_Avalonia_Media_Typeface">Typeface</a></dt><dd>The matching typeface.</dd></dl>

#### Return Value
<a href="https://learn.microsoft.com/dotnet/api/system.boolean" target="_blank" rel="noopener noreferrer">Boolean</a>  
`True`, if the <a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl</a> could match the character to specified parameters, `False` otherwise.

## See Also


#### Reference
<a href="T_Avalonia_Platform_IFontManagerImpl">IFontManagerImpl Interface</a>  
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
