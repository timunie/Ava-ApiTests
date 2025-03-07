# UiThreadRenderTimer Class


Render timer that ticks on UI thread. Useful for debugging or bootstrapping on new platforms



## Definition
**Namespace:** <a href="N_Avalonia_Rendering">Avalonia.Rendering</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class UiThreadRenderTimer : DefaultRenderTimer
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class UiThreadRenderTimer
	Inherits DefaultRenderTimer
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type UiThreadRenderTimer = 
    class
        inherit DefaultRenderTimer
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Rendering/UiThreadRenderTimer.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_Rendering_DefaultRenderTimer">DefaultRenderTimer</a>  →  UiThreadRenderTimer</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Rendering_UiThreadRenderTimer__ctor">UiThreadRenderTimer(Int32)</a></td>
<td>Initializes a new instance of the UiThreadRenderTimer class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Rendering_DefaultRenderTimer_FramesPerSecond">FramesPerSecond</a></td>
<td>Gets the number of frames per second at which the loop runs.<br />(Inherited from <a href="T_Avalonia_Rendering_DefaultRenderTimer">DefaultRenderTimer</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Rendering_UiThreadRenderTimer_RunsInBackground">RunsInBackground</a></td>
<td>Indicates if the timer ticks on a non-UI thread<br />(Overrides <a href="P_Avalonia_Rendering_DefaultRenderTimer_RunsInBackground">DefaultRenderTimer.RunsInBackground</a>)</td>
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
<td><a href="M_Avalonia_Rendering_DefaultRenderTimer_Start">Start()</a></td>
<td>Starts the timer.<br />(Inherited from <a href="T_Avalonia_Rendering_DefaultRenderTimer">DefaultRenderTimer</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_UiThreadRenderTimer_StartCore">StartCore(Action(TimeSpan))</a></td>
<td>Provides the implementation of starting the timer.<br />(Overrides <a href="M_Avalonia_Rendering_DefaultRenderTimer_StartCore">DefaultRenderTimer.StartCore(Action(TimeSpan))</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Rendering_DefaultRenderTimer_Stop">Stop()</a></td>
<td>Stops the timer.<br />(Inherited from <a href="T_Avalonia_Rendering_DefaultRenderTimer">DefaultRenderTimer</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Rendering_DefaultRenderTimer_Tick">Tick</a></td>
<td>Raised when the render timer ticks to signal a new frame should be drawn.<br />(Inherited from <a href="T_Avalonia_Rendering_DefaultRenderTimer">DefaultRenderTimer</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Rendering">Avalonia.Rendering Namespace</a>  
