# TargetWeakEventSubscriber&lt;TTarget, TEventArgs&gt; Class




## Definition
**Namespace:** <a href="N_Avalonia_Utilities">Avalonia.Utilities</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public sealed class TargetWeakEventSubscriber<TTarget, TEventArgs> : IWeakEventSubscriber<TEventArgs>
where TEventArgs : EventArgs

```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public NotInheritable Class TargetWeakEventSubscriber(Of TTarget, TEventArgs As EventArgs)
	Implements IWeakEventSubscriber(Of TEventArgs)
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<SealedAttribute>]
type TargetWeakEventSubscriber<'TTarget, 'TEventArgs when 'TEventArgs : EventArgs> = 
    class
        interface IWeakEventSubscriber<'TEventArgs>
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Utilities/IWeakEventSubscriber.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  TargetWeakEventSubscriber(TTarget, TEventArgs)</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Utilities_IWeakEventSubscriber_1">IWeakEventSubscriber</a>(TEventArgs)</td></tr>
</table>



#### Type Parameters
<dl><dt /><dd /><dt /><dd /></dl>

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Utilities_TargetWeakEventSubscriber_2__ctor">TargetWeakEventSubscriber(TTarget, TEventArgs)(TTarget, Action(TTarget, Object, WeakEvent, TEventArgs))</a></td>
<td>Initializes a new instance of the TargetWeakEventSubscriber(TTarget, TEventArgs) class</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals(system-object)" target="_blank" rel="noopener noreferrer">Equals(Object)</a></td>
<td>Determines whether the specified object is equal to the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Utilities">Avalonia.Utilities Namespace</a>  

