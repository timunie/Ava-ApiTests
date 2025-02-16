---
title:ICompositionImportedGpuImage Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# ICompositionImportedGpuImage Interface




## Definition
**Namespace:** <a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[NotClientImplementableAttribute]
public interface ICompositionImportedGpuImage : ICompositionGpuImportedObject, 
	IAsyncDisposable
```
**VB**
``` VB
<NotClientImplementableAttribute>
Public Interface ICompositionImportedGpuImage
	Inherits ICompositionGpuImportedObject, IAsyncDisposable
```
**F#**
``` F#
[<NotClientImplementableAttribute>]
type ICompositionImportedGpuImage = 
    interface
        interface ICompositionGpuImportedObject
        interface IAsyncDisposable
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Rendering_Composition_ICompositionGpuImportedObject">ICompositionGpuImportedObject</a>, <a href="https://learn.microsoft.com/dotnet/api/system.iasyncdisposable" target="_blank" rel="noopener noreferrer">IAsyncDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuImportedObject_ImportCompleted">ImportCompleted</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_ICompositionGpuImportedObject">ICompositionGpuImportedObject</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Rendering_Composition_ICompositionGpuImportedObject_IsLost">IsLost</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Rendering_Composition_ICompositionGpuImportedObject">ICompositionGpuImportedObject</a>)</td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.iasyncdisposable.disposeasync" target="_blank" rel="noopener noreferrer">DisposeAsync()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources asynchronously.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.iasyncdisposable" target="_blank" rel="noopener noreferrer">IAsyncDisposable</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering_Composition">Avalonia.Rendering.Composition Namespace</a>  
