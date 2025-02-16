---
title:IGlExportableExternalSemaphore Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IGlExportableExternalSemaphore Interface




## Definition
**Namespace:** <a href="N_Avalonia_OpenGL">Avalonia.OpenGL</a>  
**Assembly:** Avalonia.OpenGL (in Avalonia.OpenGL.dll) Version: 11.2.4

**C#**
``` C#
public interface IGlExportableExternalSemaphore : IGlExternalSemaphore, 
	IDisposable
```
**VB**
``` VB
Public Interface IGlExportableExternalSemaphore
	Inherits IGlExternalSemaphore, IDisposable
```
**F#**
``` F#
type IGlExportableExternalSemaphore = 
    interface
        interface IGlExternalSemaphore
        interface IDisposable
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_OpenGL_IGlExternalSemaphore">IGlExternalSemaphore</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlExportableExternalSemaphore_GetHandle">GetHandle()</a></td>
<td> </td></tr>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlExternalSemaphore_SignalSemaphore">SignalSemaphore(IGlExternalImageTexture)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_IGlExternalSemaphore">IGlExternalSemaphore</a>)</td></tr>
<tr>
<td><a href="M_Avalonia_OpenGL_IGlExternalSemaphore_WaitSemaphore">WaitSemaphore(IGlExternalImageTexture)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_OpenGL_IGlExternalSemaphore">IGlExternalSemaphore</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_OpenGL">Avalonia.OpenGL Namespace</a>  
