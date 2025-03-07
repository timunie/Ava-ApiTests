# IFontManagerImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IFontManagerImpl
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IFontManagerImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IFontManagerImpl = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IFontManagerImpl.cs" title="View the source code">View Source</a>



## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IFontManagerImpl_GetDefaultFontFamilyName">GetDefaultFontFamilyName()</a></td>
<td>Gets the system's default font family's name.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IFontManagerImpl_GetInstalledFontFamilyNames">GetInstalledFontFamilyNames(Boolean)</a></td>
<td>Get all installed fonts in the system. If <code>true</code> the font collection is updated.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IFontManagerImpl_TryCreateGlyphTypeface">TryCreateGlyphTypeface(Stream, FontSimulations, IGlyphTypeface)</a></td>
<td>Tries to create a glyph typeface from specified stream.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IFontManagerImpl_TryCreateGlyphTypeface_1">TryCreateGlyphTypeface(String, FontStyle, FontWeight, FontStretch, IGlyphTypeface)</a></td>
<td>Tries to get a glyph typeface for specified parameters.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IFontManagerImpl_TryMatchCharacter">TryMatchCharacter(Int32, FontStyle, FontWeight, FontStretch, CultureInfo, Typeface)</a></td>
<td>Tries to match a specified character to a typeface that supports specified font properties.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
