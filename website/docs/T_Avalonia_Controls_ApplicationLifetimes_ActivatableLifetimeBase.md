# ActivatableLifetimeBase Class




## Definition
**Namespace:** <a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public abstract class ActivatableLifetimeBase : IActivatableLifetime
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public MustInherit Class ActivatableLifetimeBase
	Implements IActivatableLifetime
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
[<AbstractClassAttribute>]
type ActivatableLifetimeBase = 
    class
        interface IActivatableLifetime
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/ApplicationLifetimes/ActivatableLifetimeBase.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  ActivatableLifetimeBase</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableLifetime">IActivatableLifetime</a></td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase__ctor">ActivatableLifetimeBase()</a></td>
<td>Initializes a new instance of the ActivatableLifetimeBase class</td>
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
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase_OnActivated">OnActivated(ActivatedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase_OnActivated_1">OnActivated(ActivationKind)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase_OnDeactivated">OnDeactivated(ActivatedEventArgs)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase_OnDeactivated_1">OnDeactivated(ActivationKind)</a></td>
<td> </td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase_TryEnterBackground">TryEnterBackground()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase_TryLeaveBackground">TryLeaveBackground()</a></td>
<td> </td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase_Activated">Activated</a></td>
<td> </td>
</tr>
<tr>
<td><a href="E_Avalonia_Controls_ApplicationLifetimes_ActivatableLifetimeBase_Deactivated">Deactivated</a></td>
<td> </td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Controls_ApplicationLifetimes">Avalonia.Controls.ApplicationLifetimes Namespace</a>  
