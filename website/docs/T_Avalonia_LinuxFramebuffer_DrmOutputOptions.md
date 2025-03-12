# DrmOutputOptions Class


DRM Output Options



## Definition
**Namespace:** <a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer</a>  
**Assembly:** Avalonia.LinuxFramebuffer (in Avalonia.LinuxFramebuffer.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class DrmOutputOptions
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class DrmOutputOptions
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type DrmOutputOptions = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Linux/Avalonia.LinuxFramebuffer/DrmOutputOptions.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  DrmOutputOptions</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_LinuxFramebuffer_DrmOutputOptions__ctor">DrmOutputOptions()</a></td>
<td>Initializes a new instance of the DrmOutputOptions class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_ConnectorType">ConnectorType</a></td>
<td>Specifies whether our connector is HDMI-A, DVI, DisplayPort, etc. If null, the preferred connector will be used.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_ConnectorTypeId">ConnectorTypeId</a></td>
<td>Specifies the connector type ID used with <a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_ConnectorType">ConnectorType</a>. If null, the preferred connector type ID will be used.</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_EnableInitialBufferSwapping">EnableInitialBufferSwapping</a></td>
<td>If true an two cycle buffer swapping is processed at init. Default: True</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_InitialBufferSwappingColor">InitialBufferSwappingColor</a></td>
<td>Color for <a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_EnableInitialBufferSwapping">EnableInitialBufferSwapping</a> Default: R0 G0 B0 A0</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_Scaling">Scaling</a></td>
<td>Scaling factor. Default: 1.0</td>
</tr>
<tr>
<td><a href="P_Avalonia_LinuxFramebuffer_DrmOutputOptions_VideoMode">VideoMode</a></td>
<td>Specifies the video mode with which the DrmOutput should be created, if it is not found it will fallback to the preferred mode. If null, the preferred mode will be used.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_LinuxFramebuffer">Avalonia.LinuxFramebuffer Namespace</a>  

