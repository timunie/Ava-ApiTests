import Tabs from '@theme/Tabs'; 
import TabItem from '@theme/TabItem'; 
import Tag from '@site/src/components/Tag'; 

# OffscreenTopLevelImplBase Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls_Embedding_Offscreen">Avalonia.Controls.Embedding.Offscreen</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0+68ab391c0a3653e0722638e29fcbd9633c7fd386

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class OffscreenTopLevelImplBase : ITopLevelImpl, 
	IOptionalFeatureProvider, IDisposable
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class OffscreenTopLevelImplBase
	Implements ITopLevelImpl, IOptionalFeatureProvider, IDisposable
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type OffscreenTopLevelImplBase = 
    class
        interface ITopLevelImpl
        interface IOptionalFeatureProvider
        interface IDisposable
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  OffscreenTopLevelImplBase</td></tr>
<tr><td><strong>Implements</strong></td><td>IOptionalFeatureProvider, <a href="T_Avalonia_Platform_ITopLevelImpl">ITopLevelImpl</a>, <a href="https://learn.microsoft.com/dotnet/api/system.idisposable" target="_blank" rel="noopener noreferrer">IDisposable</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase__ctor">OffscreenTopLevelImplBase</a></td>
<td>Initializes a new instance of the OffscreenTopLevelImplBase class</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_AcrylicCompensationLevels">AcrylicCompensationLevels</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_ClientSize">ClientSize</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_Closed">Closed</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_Compositor">Compositor</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_DesktopScaling">DesktopScaling</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_FrameSize">FrameSize</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_Handle">Handle</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_Input">Input</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_InputRoot">InputRoot</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_IsDisposed">IsDisposed</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_LostFocus">LostFocus</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_MouseDevice">MouseDevice</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_Paint">Paint</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_RenderScaling">RenderScaling</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_Resized">Resized</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_ScalingChanged">ScalingChanged</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_Surfaces">Surfaces</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_TransparencyLevel">TransparencyLevel</a></td>
<td> </td>
</tr>
<tr>
<td><a href="P_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_TransparencyLevelChanged">TransparencyLevelChanged</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_CreatePopup">CreatePopup</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_Dispose">Dispose</a></td>
<td>Releases all resources used by the OffscreenTopLevelImplBase</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_PointToClient">PointToClient</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_PointToScreen">PointToScreen</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_SetCursor">SetCursor</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_SetFrameThemeVariant">SetFrameThemeVariant</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_SetInputRoot">SetInputRoot</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_SetTransparencyLevelHint">SetTransparencyLevelHint</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_Embedding_Offscreen_OffscreenTopLevelImplBase_TryGetFeature">TryGetFeature</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_Embedding_Offscreen">Avalonia.Controls.Embedding.Offscreen Namespace</a>  
