# IGlyphRunImpl Interface


An immutable platform representation of a <a href="T_Avalonia_Media_GlyphRun">GlyphRun</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IGlyphRunImpl : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IGlyphRunImpl
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IGlyphRunImpl = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IGlyphRunImpl.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IGlyphRunImpl_BaselineOrigin">BaselineOrigin</a></td>
<td>Gets the baseline origin of the glyph run./&gt;.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IGlyphRunImpl_Bounds">Bounds</a></td>
<td>Gets the conservative bounding box of the glyph run./&gt;.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IGlyphRunImpl_FontRenderingEmSize">FontRenderingEmSize</a></td>
<td>Gets the em size used for rendering the IGlyphRunImpl.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Platform_IGlyphRunImpl_GlyphTypeface">GlyphTypeface</a></td>
<td>Gets the <a href="T_Avalonia_Media_IGlyphTypeface">IGlyphTypeface</a> for the IGlyphRunImpl.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IGlyphRunImpl_GetIntersections">GetIntersections(Single, Single)</a></td>
<td>Gets the intersections of specified upper and lower limit.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
