---
title:ILayoutManager Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ILayoutManager Interface




## Definition
**Namespace:** <a href="N_Avalonia_Layout">Avalonia.Layout</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
public interface ILayoutManager : IDisposable
```
**VB**
``` VB
Public Interface ILayoutManager
	Inherits IDisposable
```
**F#**
``` F#
type ILayoutManager = 
    interface
        interface IDisposable
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_ExecuteInitialLayoutPass">ExecuteInitialLayoutPass()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_ExecuteLayoutPass">ExecuteLayoutPass()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_InvalidateArrange">InvalidateArrange(Layoutable)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_InvalidateMeasure">InvalidateMeasure(Layoutable)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_RegisterEffectiveViewportListener">RegisterEffectiveViewportListener(Layoutable)</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_Layout_ILayoutManager_UnregisterEffectiveViewportListener">UnregisterEffectiveViewportListener(Layoutable)</a></td>
<td> </td></tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Layout_ILayoutManager_LayoutUpdated">LayoutUpdated</a></td>
<td> </td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Layout">Avalonia.Layout Namespace</a>  
