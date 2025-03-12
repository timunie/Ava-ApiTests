# ShapedBuffer Class




## Definition
**Namespace:** <a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class ShapedBuffer : IReadOnlyList<GlyphInfo>, 
	IEnumerable<GlyphInfo>, IEnumerable, IReadOnlyCollection<GlyphInfo>, 
	IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class ShapedBuffer
	Implements IReadOnlyList(Of GlyphInfo), IEnumerable(Of GlyphInfo), 
	IEnumerable, IReadOnlyCollection(Of GlyphInfo), IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type ShapedBuffer = 
    class
        interface IReadOnlyList<GlyphInfo>
        interface IEnumerable<GlyphInfo>
        interface IEnumerable
        interface IReadOnlyCollection<GlyphInfo>
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Media/TextFormatting/ShapedBuffer.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ShapedBuffer</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1" target="_blank" rel="noopener noreferrer">IEnumerable</a>(<a href="T_Avalonia_Media_TextFormatting_GlyphInfo">GlyphInfo</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlycollection-1" target="_blank" rel="noopener noreferrer">IReadOnlyCollection</a>(<a href="T_Avalonia_Media_TextFormatting_GlyphInfo">GlyphInfo</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.generic.ireadonlylist-1" target="_blank" rel="noopener noreferrer">IReadOnlyList</a>(<a href="T_Avalonia_Media_TextFormatting_GlyphInfo">GlyphInfo</a>), <a href="https://learn.microsoft.com/dotnet/api/system.collections.ienumerable" target="_blank" rel="noopener noreferrer">IEnumerable</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_ShapedBuffer__ctor">ShapedBuffer(ReadOnlyMemory(Char), Int32, IGlyphTypeface, Double, SByte)</a></td>
<td>Initializes a new instance of the ShapedBuffer class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedBuffer_BidiLevel">BidiLevel</a></td>
<td>The buffer's bidi level.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedBuffer_FontRenderingEmSize">FontRenderingEmSize</a></td>
<td>The buffers font rendering em size.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedBuffer_GlyphTypeface">GlyphTypeface</a></td>
<td>The buffer's glyph typeface.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedBuffer_IsLeftToRight">IsLeftToRight</a></td>
<td>The buffer's reading direction.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedBuffer_Item">Item(Int32)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedBuffer_Length">Length</a></td>
<td>The buffer's length.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Media_TextFormatting_ShapedBuffer_Text">Text</a></td>
<td>The text that is represended by this buffer.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_ShapedBuffer_Dispose">Dispose()</a></td>
<td>Releases all resources used by the ShapedBuffer</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Media_TextFormatting_ShapedBuffer_GetEnumerator">GetEnumerator()</a></td>
<td> </td>
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
<td><a href="M_Avalonia_Media_TextFormatting_ShapedBuffer_Reverse">Reverse()</a></td>
<td>Reverses the buffer.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Media_TextFormatting">Avalonia.Media.TextFormatting Namespace</a>  

