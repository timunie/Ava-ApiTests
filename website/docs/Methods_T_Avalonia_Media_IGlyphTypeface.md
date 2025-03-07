# IGlyphTypeface Methods




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
<a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface Interface</a>  
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
