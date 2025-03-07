# GlyphRun Class


Represents a sequence of glyphs from a single face of a single font at a single size, and with a single rendering style.



## Definition
**Namespace:** <a href="N_Avalonia_Media">Avalonia.Media</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class GlyphRun : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class GlyphRun
	Implements IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type GlyphRun = 
    class
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/GlyphRun.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  GlyphRun</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun__ctor">GlyphRun(IGlyphTypeface, Double, ReadOnlyMemory(Char), IReadOnlyList(GlyphInfo), Nullable(Point), Int32)</a></td>
<td>Initializes a new instance of the GlyphRun class by specifying properties of the class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun__ctor_1">GlyphRun(IGlyphTypeface, Double, ReadOnlyMemory(Char), IReadOnlyList(UInt16), Nullable(Point), Int32)</a></td>
<td>Initializes a new instance of the GlyphRun class by specifying properties of the class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_BaselineOrigin">BaselineOrigin</a></td>
<td>Gets or sets the baseline origin of theGlyphRun.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_BiDiLevel">BiDiLevel</a></td>
<td>Gets or sets the bidirectional nesting level of the GlyphRun.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_Bounds">Bounds</a></td>
<td>Gets the conservative bounding box of the GlyphRun.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_Characters">Characters</a></td>
<td>Gets or sets the list of UTF16 code points that represent the Unicode content of the GlyphRun.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_FontRenderingEmSize">FontRenderingEmSize</a></td>
<td>Gets or sets the em size used for rendering the GlyphRun.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_GlyphInfos">GlyphInfos</a></td>
<td>Gets or sets the list of glyphs to use to render this run.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_GlyphTypeface">GlyphTypeface</a></td>
<td>Gets the <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a> for the GlyphRun.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_InkBounds">InkBounds</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_IsLeftToRight">IsLeftToRight</a></td>
<td>Returns <code>true</code> if the text direction is left-to-right. Otherwise, returns <code>false</code>.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_GlyphRun_Metrics">Metrics</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_BuildGeometry">BuildGeometry()</a></td>
<td>Obtains geometry for the glyph run.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_Dispose">Dispose()</a></td>
<td>Releases all resources used by the GlyphRun</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_FindGlyphIndex">FindGlyphIndex(Int32)</a></td>
<td>Finds a glyph index for given character index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_FindNearestCharacterHit">FindNearestCharacterHit(Int32, Double)</a></td>
<td>Finds the nearest <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> at given index.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_GetCharacterHitFromDistance">GetCharacterHitFromDistance(Double, Boolean)</a></td>
<td>Retrieves the <a href="T_Avalonia_Media_CharacterHit">CharacterHit</a> value that represents the character hit of the caret of the GlyphRun.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_GetDistanceFromCharacterHit">GetDistanceFromCharacterHit(CharacterHit)</a></td>
<td>Retrieves the offset from the leading edge of the GlyphRun to the leading or trailing edge of a caret stop containing the specified character hit.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_GetIntersections">GetIntersections(Single, Single)</a></td>
<td>Gets the intersections of specified upper and lower limit.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_GetNextCaretCharacterHit">GetNextCaretCharacterHit(CharacterHit)</a></td>
<td>Retrieves the next valid caret character hit in the logical direction in the GlyphRun.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_GetPreviousCaretCharacterHit">GetPreviousCaretCharacterHit(CharacterHit)</a></td>
<td>Retrieves the previous valid caret character hit in the logical direction in the GlyphRun.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_GlyphRun_TryCreateImmutableGlyphRunReference">TryCreateImmutableGlyphRunReference()</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media">Avalonia.Media Namespace</a>  
