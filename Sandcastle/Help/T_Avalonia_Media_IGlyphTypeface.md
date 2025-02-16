---
title:IGlyphTypeface Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IGlyphTypeface Interface




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[UnstableAttribute]
public interface IGlyphTypeface : IDisposable
```
**VB**
``` VB
<UnstableAttribute>
Public Interface IGlyphTypeface
	Inherits IDisposable
```
**F#**
``` F#
[<UnstableAttribute>]
type IGlyphTypeface = 
    interface
        interface IDisposable
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_FamilyName">FamilyName</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_FontSimulations">FontSimulations</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_GlyphCount">GlyphCount</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_Metrics">Metrics</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_Stretch">Stretch</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_Style">Style</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_IGlyphTypeface_Weight">Weight</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_GetGlyph">GetGlyph(UInt32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_GetGlyphAdvance">GetGlyphAdvance(UInt16)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_GetGlyphAdvances">GetGlyphAdvances(ReadOnlySpan(UInt16))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_GetGlyphs">GetGlyphs(ReadOnlySpan(UInt32))</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_TryGetGlyph">TryGetGlyph(UInt32, UInt16)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_TryGetGlyphMetrics">TryGetGlyphMetrics(UInt16, GlyphMetrics)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_IGlyphTypeface_TryGetTable">TryGetTable(UInt32, Byte[])</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
