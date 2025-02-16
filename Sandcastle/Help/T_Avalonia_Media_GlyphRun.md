---
title:GlyphRun Class
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# GlyphRun Class




## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public sealed class GlyphRun : IDisposable
```
**VB**
``` VB
Public NotInheritable Class GlyphRun
	Implements IDisposable
```
**F#**
``` F#
[<SealedAttribute>]
type GlyphRun = 
    class
        interface IDisposable
    end
```

<table><tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  GlyphRun</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun__ctor">GlyphRun(IGlyphTypeface, Double, ReadOnlyMemory(Char), IReadOnlyList(GlyphInfo), Nullable(Point), Int32)</a></td>
<td>Initializes a new instance of the GlyphRun class</td></tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun__ctor_1">GlyphRun(IGlyphTypeface, Double, ReadOnlyMemory(Char), IReadOnlyList(UInt16), Nullable(Point), Int32)</a></td>
<td>Initializes a new instance of the GlyphRun class</td></tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_BaselineOrigin">BaselineOrigin</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_BiDiLevel">BiDiLevel</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_Bounds">Bounds</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_Characters">Characters</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_FontRenderingEmSize">FontRenderingEmSize</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_GlyphInfos">GlyphInfos</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_GlyphTypeface">GlyphTypeface</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_InkBounds">InkBounds</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_IsLeftToRight">IsLeftToRight</a></td>
<td> </td></tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_Metrics">Metrics</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_BuildGeometry">BuildGeometry()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_Dispose">Dispose()</a></td>
<td>Releases all resources used by the GlyphRun</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_FindGlyphIndex">FindGlyphIndex(Int32)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_FindNearestCharacterHit">FindNearestCharacterHit(Int32, Double)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_GetCharacterHitFromDistance">GetCharacterHitFromDistance(Double, Boolean)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_GetDistanceFromCharacterHit">GetDistanceFromCharacterHit(CharacterHit)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_GetIntersections">GetIntersections(Single, Single)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_GetNextCaretCharacterHit">GetNextCaretCharacterHit(CharacterHit)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_GetPreviousCaretCharacterHit">GetPreviousCaretCharacterHit(CharacterHit)</a></td>
<td> </td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_TryCreateImmutableGlyphRunReference">TryCreateImmutableGlyphRunReference()</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
