# AvaloniaNativePlatformOptions Class


OSX backend options.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Native (in Avalonia.Native.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class AvaloniaNativePlatformOptions
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class AvaloniaNativePlatformOptions
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type AvaloniaNativePlatformOptions = class end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Native/AvaloniaNativePlatformExtensions.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  AvaloniaNativePlatformOptions</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaNativePlatformOptions__ctor">AvaloniaNativePlatformOptions()</a></td>
<td>Initializes a new instance of the AvaloniaNativePlatformOptions class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_AvaloniaNativePlatformOptions_AppSandboxEnabled">AppSandboxEnabled</a></td>
<td>If you distribute your app in App Store - it should be with sandbox enabled. This parameter enables <a href="M_Avalonia_Platform_Storage_IStorageItem_SaveBookmarkAsync">SaveBookmarkAsync()</a> and related APIs, as well as wrapping all storage related calls in secure context. The default value is true.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaNativePlatformOptions_AvaloniaNativeLibraryPath">AvaloniaNativeLibraryPath</a></td>
<td>This property should be used in case you want to build Avalonia OSX native part by yourself and make your Avalonia app run with it. The default value is null.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaNativePlatformOptions_OverlayPopups">OverlayPopups</a></td>
<td>Embeds popups to the window when set to true. The default value is false.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaNativePlatformOptions_RenderingMode">RenderingMode</a></td>
<td>Gets or sets Avalonia rendering modes with fallbacks. The first element in the array has the highest priority. The default value is: <a href="T_Avalonia_AvaloniaNativeRenderingMode">OpenGl</a>, <a href="T_Avalonia_AvaloniaNativeRenderingMode">Software</a>.</td>
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
<a href="N_Avalonia">Avalonia Namespace</a>  
