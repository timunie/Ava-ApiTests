# IGlyphTypeface Interface




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
[UnstableAttribute]
public interface IGlyphTypeface : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
<UnstableAttribute>
Public Interface IGlyphTypeface
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<UnstableAttribute>]
type IGlyphTypeface = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/IGlyphTypeface.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_FamilyName">FamilyName</a></td>
<td>Gets the family name for the IGlyphTypeface object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_FontSimulations">FontSimulations</a></td>
<td>Gets the algorithmic style simulations applied to this glyph typeface.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_GlyphCount">GlyphCount</a></td>
<td>Gets the number of glyphs held by this glyph typeface.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_Metrics">Metrics</a></td>
<td>Gets the font metrics.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_Stretch">Stretch</a></td>
<td>Gets the <a href="T_Avalonia_Media_FontStretch">FontStretch</a> value for the IGlyphTypeface object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_Style">Style</a></td>
<td>Gets the style for the IGlyphTypeface object.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_Weight">Weight</a></td>
<td>Gets the designed weight of the font represented by the IGlyphTypeface object.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_GetGlyph">GetGlyph(UInt32)</a></td>
<td>Returns an glyph index for the specified codepoint.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_GetGlyphAdvance">GetGlyphAdvance(UInt16)</a></td>
<td>Returns the glyph advance for the specified glyph.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_GetGlyphAdvances">GetGlyphAdvances(ReadOnlySpan(UInt16))</a></td>
<td>Returns an array of glyph advances in design em size.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_GetGlyphs">GetGlyphs(ReadOnlySpan(UInt32))</a></td>
<td>Returns an array of glyph indices. Codepoints that are not represented by the font are returned as <code language="cs">0</code>.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_TryGetGlyph">TryGetGlyph(UInt32, UInt16)</a></td>
<td>Tries to get an glyph index for specified codepoint.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_TryGetGlyphMetrics">TryGetGlyphMetrics(UInt16, GlyphMetrics)</a></td>
<td>Tries to get a glyph's metrics in em units.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_TryGetTable">TryGetTable(UInt32, Byte[])</a></td>
<td>Returns the contents of the table data for the specified tag.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  

