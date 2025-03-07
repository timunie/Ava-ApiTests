# ILayoutManager Interface


Manages measuring and arranging of controls.



## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface ILayoutManager : IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface ILayoutManager
	Inherits IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type ILayoutManager = 
    interface
        interface IDisposable
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Layout/ILayoutManager.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_ExecuteInitialLayoutPass">ExecuteInitialLayoutPass()</a></td>
<td>Executes the initial layout pass on a layout root.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_ExecuteLayoutPass">ExecuteLayoutPass()</a></td>
<td>Executes a layout pass.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_InvalidateArrange">InvalidateArrange(Layoutable)</a></td>
<td>Notifies the layout manager that a control requires an arrange.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_InvalidateMeasure">InvalidateMeasure(Layoutable)</a></td>
<td>Notifies the layout manager that a control requires a measure.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_RegisterEffectiveViewportListener">RegisterEffectiveViewportListener(Layoutable)</a></td>
<td>Registers a control as wanting to receive effective viewport notifications.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_UnregisterEffectiveViewportListener">UnregisterEffectiveViewportListener(Layoutable)</a></td>
<td>Registers a control as no longer wanting to receive effective viewport notifications.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Layout_ILayoutManager_LayoutUpdated">LayoutUpdated</a></td>
<td>Raised when the layout manager completes a layout pass.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  
