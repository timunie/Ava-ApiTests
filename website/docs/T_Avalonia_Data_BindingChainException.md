# BindingChainException Class


An exception returned through <a href="T_Avalonia_Data_BindingNotification">BindingNotification</a> signaling that a requested binding expression could not be evaluated because of an error in one of the links of the binding chain.



## Definition
**Namespace:** <a href="N_Avalonia_Data">Avalonia.Data</a>  
**Assembly:** Avalonia.Base (in Avalonia.Base.dll) Version: 11.2.0

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class BindingChainException : Exception
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class BindingChainException
	Inherits Exception
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type BindingChainException = 
    class
        inherit Exception
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Base/Data/BindingChainException.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>  →  BindingChainException</td></tr>
</table>



## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Data_BindingChainException__ctor">BindingChainException()</a></td>
<td>Initializes a new instance of the BindingChainException class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingChainException__ctor_2">BindingChainException(String)</a></td>
<td>Initializes a new instance of the BindingChainException class.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Data_BindingChainException__ctor_1">BindingChainException(String, String, String)</a></td>
<td>Initializes a new instance of the BindingChainException class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.data" target="_blank" rel="noopener noreferrer">Data</a></td>
<td>Gets a collection of key/value pairs that provide additional user-defined information about the exception.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingChainException_Expression">Expression</a></td>
<td>Gets the expression that could not be evaluated.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingChainException_ExpressionErrorPoint">ExpressionErrorPoint</a></td>
<td>Gets the point in the expression at which the error occurred.</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.helplink" target="_blank" rel="noopener noreferrer">HelpLink</a></td>
<td>Gets or sets a link to the help file associated with this exception.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.hresult" target="_blank" rel="noopener noreferrer">HResult</a></td>
<td>Gets or sets HRESULT, a coded numerical value that is assigned to a specific exception.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.innerexception" target="_blank" rel="noopener noreferrer">InnerException</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a> instance that caused the current exception.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Data_BindingChainException_Message">Message</a></td>
<td>Gets a message that describes the current exception.<br />(Overrides <a href="https://learn.microsoft.com/dotnet/api/system.exception.message" target="_blank" rel="noopener noreferrer">Exception.Message</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.source" target="_blank" rel="noopener noreferrer">Source</a></td>
<td>Gets or sets the name of the application or the object that causes the error.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.stacktrace" target="_blank" rel="noopener noreferrer">StackTrace</a></td>
<td>Gets a string representation of the immediate frames on the call stack.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.targetsite" target="_blank" rel="noopener noreferrer">TargetSite</a></td>
<td>Gets the method that throws the current exception.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</td>
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
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.getbaseexception" target="_blank" rel="noopener noreferrer">GetBaseException()</a></td>
<td>When overridden in a derived class, returns the <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a> that is the root cause of one or more subsequent exceptions.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gethashcode" target="_blank" rel="noopener noreferrer">GetHashCode()</a></td>
<td>Serves as the default hash function.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the runtime type of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Creates and returns a string representation of the current exception.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.exception.serializeobjectstate" target="_blank" rel="noopener noreferrer">SerializeObjectState</a></td>
<td>Occurs when an exception is serialized to create an exception state object that contains serialized data about the exception.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.exception" target="_blank" rel="noopener noreferrer">Exception</a>)<br />Obsolete.</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia_Data">Avalonia.Data Namespace</a>  
