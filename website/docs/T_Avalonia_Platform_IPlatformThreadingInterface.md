# IPlatformThreadingInterface Interface


Provides platform-specific services relating to threading.



## Definition
**Namespace:** <a href="N_Avalonia_Platform">Avalonia.Platform</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IPlatformThreadingInterface
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IPlatformThreadingInterface
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IPlatformThreadingInterface = interface end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Platform/IPlatformThreadingInterface.cs" title="View the source code">View Source</a>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Platform_IPlatformThreadingInterface_CurrentThreadIsLoopThread">CurrentThreadIsLoopThread</a></td>
<td> </td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformThreadingInterface_Signal">Signal(DispatcherPriority)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Platform_IPlatformThreadingInterface_StartTimer">StartTimer(DispatcherPriority, TimeSpan, Action)</a></td>
<td>Starts a timer.</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Platform_IPlatformThreadingInterface_Signaled">Signaled</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Platform">Avalonia.Platform Namespace</a>  
