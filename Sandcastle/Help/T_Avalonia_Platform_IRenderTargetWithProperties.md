---
title:IRenderTargetWithProperties Interface
description: Autogenertated API Reference page
hide_table_of_contents: false
---
# IRenderTargetWithProperties Interface
<blockquote><strong>Note: This API is now obsolete.</strong></blockquote>




## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.4

**C#**
``` C#
[ObsoleteAttribute("Use IRenderTarget2", true)]
public interface IRenderTargetWithProperties : IRenderTarget, 
	IDisposable
```
**VB**
``` VB
<ObsoleteAttribute("Use IRenderTarget2", true)>
Public Interface IRenderTargetWithProperties
	Inherits IRenderTarget, IDisposable
```
**F#**
``` F#
[<ObsoleteAttribute("Use IRenderTarget2", true)>]
type IRenderTargetWithProperties = 
    interface
        interface IRenderTarget
        interface IDisposable
    end
```

<table><tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IRenderTarget_IsCorrupted">IsCorrupted</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>)</td></tr>
<tr>
<td><a href="P_Avalonia_Platform_IRenderTargetWithProperties_Properties">Properties</a></td>
<td> </td></tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IRenderTarget_CreateDrawingContext">CreateDrawingContext(Boolean)</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Platform_IRenderTarget">IRenderTarget</a>)</td></tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.idisposable.dispose" target="_blank" rel="noopener noreferrer">Dispose()</a></td>
<td>Performs application-defined tasks associated with freeing, releasing, or resetting unmanaged resources.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a>)</td></tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
