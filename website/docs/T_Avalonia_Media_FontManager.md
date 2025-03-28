# FontManager Class


The font manager is used to query the system's installed fonts and is responsible for caching loaded fonts. It is also responsible for the font fallback.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class FontManager
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class FontManager
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type FontManager = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/FontManager.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  FontManager</td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_FontManager_Current">Current</a></td>
<td>Get the current font manager instance.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontManager_DefaultFontFamily">DefaultFontFamily</a></td>
<td>Gets the system's default font family.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_FontManager_SystemFonts">SystemFonts</a></td>
<td>Get all system fonts.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_FontManager_AddFontCollection">AddFontCollection(IFontCollection)</a></td>
<td>Add a font collection to the manager.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FontManager_RemoveFontCollection">RemoveFontCollection(Uri)</a></td>
<td>Removes the font collection that corresponds to specified key.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FontManager_TryGetGlyphTypeface">TryGetGlyphTypeface(Typeface, IGlyphTypeface)</a></td>
<td>Tries to get a glyph typeface for specified typeface.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_FontManager_TryMatchCharacter">TryMatchCharacter(Int32, FontStyle, FontWeight, FontStretch, FontFamily, CultureInfo, Typeface)</a></td>
<td>Tries to match a specified character to a <a href="T_Avalonia_Media_Typeface">Typeface</a> that supports specified font properties.</td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Media_FontManager_CompositeFontScheme">CompositeFontScheme</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Media_FontManager_FontCollectionScheme">FontCollectionScheme</a></td>
<td> </td>
</tr>
<tr>
<td><a href="F_Avalonia_Media_FontManager_SystemFontScheme">SystemFontScheme</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

