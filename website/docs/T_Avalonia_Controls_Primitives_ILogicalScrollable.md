# ILogicalScrollable Interface


Interface implemented by controls that handle their own scrolling when placed inside a <a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer</a>.



## Definition
**Namespace:** <a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ILogicalScrollable : IScrollable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ILogicalScrollable
	Inherits IScrollable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ILogicalScrollable = 
    interface
        interface IScrollable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Primitives/ILogicalScrollable.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_Primitives_IScrollable">IScrollable</a></td></tr>
</table>

Controls that implement this interface, when placed inside a <a href="T_Avalonia_Controls_ScrollViewer">ScrollViewer</a> can override the physical scrolling behavior of the scroll viewer with logical scrolling. Physical scrolling means that the scroll viewer is a simple viewport onto a larger canvas whereas logical scrolling means that the scrolling is handled by the child control itself and it can choose to do handle the scroll information as it sees fit.

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_ILogicalScrollable_CanHorizontallyScroll">CanHorizontallyScroll</a></td>
<td>Gets or sets a value indicating whether the content can be scrolled horizontally.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_ILogicalScrollable_CanVerticallyScroll">CanVerticallyScroll</a></td>
<td>Gets or sets a value indicating whether the content can be scrolled horizontally.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IScrollable_Extent">Extent</a></td>
<td>Gets the extent of the scrollable content, in logical units<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_IScrollable">IScrollable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_ILogicalScrollable_IsLogicalScrollEnabled">IsLogicalScrollEnabled</a></td>
<td>Gets a value indicating whether logical scrolling is enabled on the control.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IScrollable_Offset">Offset</a></td>
<td>Gets or sets the current scroll offset, in logical units.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_IScrollable">IScrollable</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_ILogicalScrollable_PageScrollSize">PageScrollSize</a></td>
<td>Gets the size to page by, in logical units.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_ILogicalScrollable_ScrollSize">ScrollSize</a></td>
<td>Gets the size to scroll by, in logical units.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Primitives_IScrollable_Viewport">Viewport</a></td>
<td>Gets the size of the viewport, in logical units.<br />(Inherited from <a href="T_Avalonia_Controls_Primitives_IScrollable">IScrollable</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_ILogicalScrollable_BringIntoView">BringIntoView(Control, Rect)</a></td>
<td>Attempts to bring a portion of the target visual into view by scrolling the content.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_ILogicalScrollable_GetControlInDirection">GetControlInDirection(NavigationDirection, Control)</a></td>
<td>Gets the next control in the specified direction.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Primitives_ILogicalScrollable_RaiseScrollInvalidated">RaiseScrollInvalidated(EventArgs)</a></td>
<td>Raises the <a href="E_Avalonia_Controls_Primitives_ILogicalScrollable_ScrollInvalidated">ScrollInvalidated</a> event.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_Primitives_ILogicalScrollable_ScrollInvalidated">ScrollInvalidated</a></td>
<td>Raised when the scroll is invalidated.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Primitives">Avalonia.Controls.Primitives Namespace</a>  
