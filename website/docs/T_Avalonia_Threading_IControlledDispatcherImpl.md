# IControlledDispatcherImpl Interface




## Definition
**Namespace:** <a href="N_Avalonia_Threading">Avalonia.Threading</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public interface IControlledDispatcherImpl : IDispatcherImplWithPendingInput, 
	IDispatcherImpl
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Interface IControlledDispatcherImpl
	Inherits IDispatcherImplWithPendingInput, IDispatcherImpl
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type IControlledDispatcherImpl = 
    interface
        interface IDispatcherImplWithPendingInput
        interface IDispatcherImpl
    end
```
</TabItem>
</Tabs>

<table>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Threading_IDispatcherImpl">IDispatcherImpl</a>, <a href="T_Avalonia_Threading_IDispatcherImplWithPendingInput">IDispatcherImplWithPendingInput</a></td></tr>
</table>



## Properties
<table>
<tr>
<td><a href="P_Avalonia_Threading_IDispatcherImplWithPendingInput_CanQueryPendingInput">CanQueryPendingInput</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Threading_IDispatcherImplWithPendingInput">IDispatcherImplWithPendingInput</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_IDispatcherImpl_CurrentThreadIsLoopThread">CurrentThreadIsLoopThread</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Threading_IDispatcherImpl">IDispatcherImpl</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_IDispatcherImplWithPendingInput_HasPendingInput">HasPendingInput</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Threading_IDispatcherImplWithPendingInput">IDispatcherImplWithPendingInput</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Threading_IDispatcherImpl_Now">Now</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Threading_IDispatcherImpl">IDispatcherImpl</a>)</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_Threading_IControlledDispatcherImpl_RunLoop">RunLoop(CancellationToken)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_IDispatcherImpl_Signal">Signal()</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Threading_IDispatcherImpl">IDispatcherImpl</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Threading_IDispatcherImpl_UpdateTimer">UpdateTimer(Nullable(Int64))</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Threading_IDispatcherImpl">IDispatcherImpl</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Threading_IDispatcherImpl_Signaled">Signaled</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Threading_IDispatcherImpl">IDispatcherImpl</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Threading_IDispatcherImpl_Timer">Timer</a></td>
<td><br />(Inherited from <a href="T_Avalonia_Threading_IDispatcherImpl">IDispatcherImpl</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Threading">Avalonia.Threading Namespace</a>  
