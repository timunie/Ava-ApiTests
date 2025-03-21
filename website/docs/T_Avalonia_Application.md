# Application Class


Encapsulates a Avalonia application.



## Definition
**Namespace:** <a href="N_Avalonia">Avalonia</a>  
**Assembly:** Avalonia.Controls (in Avalonia.Controls.dll)

<Tabs groupId="api-code-preview">
<TabItem value="csharp" label="C#">
```csharp
public class Application : AvaloniaObject, 
	IDataContextProvider, IGlobalDataTemplates, IDataTemplateHost, IGlobalStyles, IStyleHost, 
	IThemeVariantHost, IResourceHost, IResourceNode, IApplicationPlatformEvents, IOptionalFeatureProvider
```
</TabItem>
<TabItem value="vb" label="VB">
```vb
Public Class Application
	Inherits AvaloniaObject
	Implements IDataContextProvider, IGlobalDataTemplates, IDataTemplateHost, IGlobalStyles, 
	IStyleHost, IThemeVariantHost, IResourceHost, IResourceNode, IApplicationPlatformEvents, 
	IOptionalFeatureProvider
```
</TabItem>
<TabItem value="fsharp" label="F#">
```fsharp
type Application = 
    class
        inherit AvaloniaObject
        interface IDataContextProvider
        interface IGlobalDataTemplates
        interface IDataTemplateHost
        interface IGlobalStyles
        interface IStyleHost
        interface IThemeVariantHost
        interface IResourceHost
        interface IResourceNode
        interface IApplicationPlatformEvents
        interface IOptionalFeatureProvider
    end
```
</TabItem>
</Tabs>



<a href="https://github.com/AvaloniaUI/Avalonia/tree/master/src/Avalonia.Controls/Application.cs" title="View the source code">View Source</a>

<table>
<tr><td><strong>Inheritance</strong></td><td><a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>  →  <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>  →  Application</td></tr>
<tr><td><strong>Implements</strong></td><td><a href="T_Avalonia_Controls_IGlobalDataTemplates">IGlobalDataTemplates</a>, <a href="T_Avalonia_Controls_IResourceHost">IResourceHost</a>, <a href="T_Avalonia_Controls_IResourceNode">IResourceNode</a>, <a href="T_Avalonia_Controls_Templates_IDataTemplateHost">IDataTemplateHost</a>, <a href="T_Avalonia_IDataContextProvider">IDataContextProvider</a>, <a href="T_Avalonia_Platform_IApplicationPlatformEvents">IApplicationPlatformEvents</a>, <a href="T_Avalonia_Platform_IOptionalFeatureProvider">IOptionalFeatureProvider</a>, <a href="T_Avalonia_Styling_IGlobalStyles">IGlobalStyles</a>, <a href="T_Avalonia_Styling_IStyleHost">IStyleHost</a>, <a href="T_Avalonia_Styling_IThemeVariantHost">IThemeVariantHost</a></td></tr>
</table>



## Remarks
The Application class encapsulates Avalonia application-specific functionality, including: - A global set of <a href="P_Avalonia_Application_DataTemplates">DataTemplates</a>. - A global set of <a href="P_Avalonia_Application_Styles">Styles</a>. - A FocusManager. - An InputManager. - Registers services needed by the rest of Avalonia in the <a href="M_Avalonia_Application_RegisterServices">RegisterServices()</a> method. - Tracks the lifetime of the application.

## Constructors
<table>
<tr>
<td><a href="M_Avalonia_Application__ctor">Application()</a></td>
<td>Creates an instance of the Application class.</td>
</tr>
</table>

## Properties
<table>
<tr>
<td><a href="P_Avalonia_Application_ActualThemeVariant">ActualThemeVariant</a></td>
<td>Gets the UI theme that is currently used by the element, which might be different than the RequestedThemeVariantProperty.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_ApplicationLifetime">ApplicationLifetime</a></td>
<td>Application lifetime, use it for things like setting the main window and exiting the app from code Currently supported lifetimes are: - <a href="T_Avalonia_Controls_ApplicationLifetimes_IClassicDesktopStyleApplicationLifetime">IClassicDesktopStyleApplicationLifetime</a> - <a href="T_Avalonia_Controls_ApplicationLifetimes_ISingleViewApplicationLifetime">ISingleViewApplicationLifetime</a> - <a href="T_Avalonia_Controls_ApplicationLifetimes_IControlledApplicationLifetime">IControlledApplicationLifetime</a> - <a href="T_Avalonia_Controls_ApplicationLifetimes_IActivatableApplicationLifetime">IActivatableApplicationLifetime</a></td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_Current">Current</a></td>
<td>Gets the current instance of the Application class.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_DataContext">DataContext</a></td>
<td>Gets or sets the Applications's data context.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_DataTemplates">DataTemplates</a></td>
<td>Gets or sets the application's global data templates.</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_InheritanceParent">InheritanceParent</a></td>
<td>Gets or sets the parent object that inherited <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> values are inherited from.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item">Item(AvaloniaProperty)</a></td>
<td>Gets or sets the value of a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_AvaloniaObject_Item_1">Item(IndexerDescriptor)</a></td>
<td>Gets or sets a binding for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_Name">Name</a></td>
<td>Application name to be used for various platform-specific purposes</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_PlatformSettings">PlatformSettings</a></td>
<td>Represents a contract for accessing global platform-specific settings.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_RequestedThemeVariant">RequestedThemeVariant</a></td>
<td>Gets or sets the UI theme variant that is used by the control (and its child elements) for resource determination. The UI theme you specify with ThemeVariant can override the app-level ThemeVariant.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_Resources">Resources</a></td>
<td>Gets the application's global resource dictionary.</td>
</tr>
<tr>
<td><a href="P_Avalonia_Application_Styles">Styles</a></td>
<td>Gets the application's global styles.</td>
</tr>
</table>

## Methods
<table>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind">Bind(AvaloniaProperty, IBinding)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind_1">Bind(AvaloniaProperty, IObservable(Object), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_2">Bind(T)(DirectPropertyBase(T), IObservable(T))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1">Bind(T)(DirectPropertyBase(T), IObservable(BindingValue(T)))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_1">Bind(T)(DirectPropertyBase(T), IObservable(Object))</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_5">Bind(T)(StyledProperty(T), IObservable(T), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_3">Bind(T)(StyledProperty(T), IObservable(BindingValue(T)), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Bind__1_4">Bind(T)(StyledProperty(T), IObservable(Object), BindingPriority)</a></td>
<td>Binds a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_CheckAccess">CheckAccess()</a></td>
<td>Returns a value indicating whether the current thread is the UI thread.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue">ClearValue(AvaloniaProperty)</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1">ClearValue(T)(AvaloniaProperty(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1_1">ClearValue(T)(DirectPropertyBase(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_ClearValue__1_2">ClearValue(T)(StyledProperty(T))</a></td>
<td>Clears a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>'s local value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_CoerceValue">CoerceValue(AvaloniaProperty)</a></td>
<td>Coerces the specified <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_Equals">Equals(Object)</a></td>
<td>Compares two objects using reference equality.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.finalize" target="_blank" rel="noopener noreferrer">Finalize()</a></td>
<td>Allows an object to try to free resources and perform other cleanup operations before it is reclaimed by garbage collection.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetBaseValue__1">GetBaseValue(T)(StyledProperty(T))</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetHashCode">GetHashCode()</a></td>
<td>Gets the hash code for the object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.gettype" target="_blank" rel="noopener noreferrer">GetType()</a></td>
<td>Gets the <a href="https://learn.microsoft.com/dotnet/api/system.type" target="_blank" rel="noopener noreferrer">Type</a> of the current instance.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue">GetValue(AvaloniaProperty)</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue__1">GetValue(T)(DirectPropertyBase(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_GetValue__1_1">GetValue(T)(StyledProperty(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_Initialize">Initialize()</a></td>
<td>Initializes the application by loading XAML etc.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsAnimating">IsAnimating(AvaloniaProperty)</a></td>
<td>Checks whether a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> is animating.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_IsSet">IsSet(AvaloniaProperty)</a></td>
<td>Checks whether a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> is set on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone" target="_blank" rel="noopener noreferrer">MemberwiseClone()</a></td>
<td>Creates a shallow copy of the current <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_OnFrameworkInitializationCompleted">OnFrameworkInitializationCompleted()</a></td>
<td> </td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_OnPropertyChanged">OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a></td>
<td><br />(Overrides <a href="M_Avalonia_AvaloniaObject_OnPropertyChanged">AvaloniaObject.OnPropertyChanged(AvaloniaPropertyChangedEventArgs)</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_OnPropertyChangedCore">OnPropertyChangedCore(AvaloniaPropertyChangedEventArgs)</a></td>
<td>Called when a avalonia property changes on the object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_RaisePropertyChanged__1">RaisePropertyChanged(T)(DirectPropertyBase(T), T, T)</a></td>
<td>Raises the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event for a direct property.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_RegisterServices">RegisterServices()</a></td>
<td>Register's the services needed by Avalonia.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetAndRaise__1">SetAndRaise(T)(DirectPropertyBase(T), T, T)</a></td>
<td>Sets the backing field for a direct avalonia property, raising the <a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a> event if the value has changed.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue">SetCurrentValue(AvaloniaProperty, Object)</a></td>
<td>Sets the value of a dependency property without changing its value source.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetCurrentValue__1">SetCurrentValue(T)(StyledProperty(T), T)</a></td>
<td>Sets the value of a dependency property without changing its value source.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue">SetValue(AvaloniaProperty, Object, BindingPriority)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue__1">SetValue(T)(DirectPropertyBase(T), T)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_SetValue__1_1">SetValue(T)(StyledProperty(T), T, BindingPriority)</a></td>
<td>Sets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="https://learn.microsoft.com/dotnet/api/system.object.tostring" target="_blank" rel="noopener noreferrer">ToString()</a></td>
<td>Returns a string that represents the current object.<br />(Inherited from <a href="https://learn.microsoft.com/dotnet/api/system.object" target="_blank" rel="noopener noreferrer">Object</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_TryGetFeature">TryGetFeature(Type)</a></td>
<td>Queries for an optional feature.</td>
</tr>
<tr>
<td><a href="M_Avalonia_Application_TryGetResource">TryGetResource(Object, ThemeVariant, Object)</a></td>
<td>Tries to find a resource within the object.</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_UpdateDataValidation">UpdateDataValidation(AvaloniaProperty, BindingValueType, Exception)</a></td>
<td>Called to update the validation state for properties for which data validation is enabled.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObject_VerifyAccess">VerifyAccess()</a></td>
<td>Checks that the current thread is the UI thread and throws if not.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
</table>

## Events
<table>
<tr>
<td><a href="E_Avalonia_Application_ActualThemeVariantChanged">ActualThemeVariantChanged</a></td>
<td>Raised when the theme variant is changed on the element or an ancestor of the element.</td>
</tr>
<tr>
<td><a href="E_Avalonia_AvaloniaObject_PropertyChanged">PropertyChanged</a></td>
<td>Raised when a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value changes on this object.<br />(Inherited from <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>)</td>
</tr>
<tr>
<td><a href="E_Avalonia_Application_ResourcesChanged">ResourcesChanged</a></td>
<td>Raised when the resources change on the element or an ancestor of the element.</td>
</tr>
<tr>
<td><a href="E_Avalonia_Application_UrlsOpened">UrlsOpened</a></td>
<td><Tag type="is-danger">Obsolete.</Tag></td>
</tr>
</table>

## Fields
<table>
<tr>
<td><a href="F_Avalonia_Application_ActualThemeVariantProperty">ActualThemeVariantProperty</a></td>
<td>Defines the ActualThemeVariant property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Application_DataContextProperty">DataContextProperty</a></td>
<td>Defines the <a href="P_Avalonia_Application_DataContext">DataContext</a> property.</td>
</tr>
<tr>
<td><a href="F_Avalonia_Application_NameProperty">NameProperty</a></td>
<td>Defines Name property</td>
</tr>
<tr>
<td><a href="F_Avalonia_Application_RequestedThemeVariantProperty">RequestedThemeVariantProperty</a></td>
<td>Defines the RequestedThemeVariant property.</td>
</tr>
</table>

## Extension Methods
<table>
<tr>
<td><a href="M_Avalonia_DevToolsExtensions_AttachDevTools_1">AttachDevTools()</a></td>
<td>Attaches DevTools to a Application, to be opened with the specified options.<br />(Defined by <a href="T_Avalonia_DevToolsExtensions">DevToolsExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_DevToolsExtensions_AttachDevTools">AttachDevTools(DevToolsOptions)</a></td>
<td>Attaches DevTools to a Application, to be opened with the specified options.<br />(Defined by <a href="T_Avalonia_DevToolsExtensions">DevToolsExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind">Bind(AvaloniaProperty, IBinding, Object)</a></td>
<td>Binds a property on an <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a> to an <a href="T_Avalonia_Data_IBinding">IBinding</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind__1">Bind(T)(AvaloniaProperty(T), IObservable(BindingValue(T)), BindingPriority)</a></td>
<td>Binds an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_Bind__1_1">Bind(T)(AvaloniaProperty(T), IObservable(T), BindingPriority)</a></td>
<td>Binds an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> to an observable.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_FindResource_1">FindResource(Object)</a></td>
<td>Finds the specified resource by searching up the logical tree and then global styles.<br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_FindResource">FindResource(ThemeVariant, Object)</a></td>
<td>Finds the specified resource by searching up the logical tree and then global styles.<br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBaseValue">GetBaseValue(AvaloniaProperty)</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBaseValue__1">GetBaseValue(T)(AvaloniaProperty(T))</a></td>
<td>Gets an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> base value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable">GetBindingObservable(AvaloniaProperty)</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__1_1">GetBindingObservable(T)(AvaloniaProperty(T))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__1">GetBindingObservable(TResult)(AvaloniaProperty, Func(Object, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetBindingObservable__2">GetBindingObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetBindingSubject">GetBindingSubject(AvaloniaProperty, BindingPriority)</a></td>
<td>Gets a subject for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetBindingSubject__1">GetBindingSubject(T)(AvaloniaProperty(T), BindingPriority)</a></td>
<td>Gets a subject for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetDiagnostic">GetDiagnostic(AvaloniaProperty)</a></td>
<td>Gets a diagnostic for a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> on a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.<br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable">GetObservable(AvaloniaProperty)</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__1_1">GetObservable(T)(AvaloniaProperty(T))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__1">GetObservable(TResult)(AvaloniaProperty, Func(Object, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetObservable__2">GetObservable(TSource, TResult)(AvaloniaProperty(TSource), Func(TSource, TResult))</a></td>
<td>Gets an observable for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetPropertyChangedObservable">GetPropertyChangedObservable(AvaloniaProperty)</a></td>
<td>Gets an observable that listens for property changed events for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_GetResourceObservable">GetResourceObservable(Object, Func(Object, Object))</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetSubject">GetSubject(AvaloniaProperty, BindingPriority)</a></td>
<td>Gets a subject for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions_GetSubject__1">GetSubject(T)(AvaloniaProperty(T), BindingPriority)</a></td>
<td>Gets a subject for an <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a>.<br />(Defined by <a href="T_Avalonia_ReactiveUI_AvaloniaObjectReactiveExtensions">AvaloniaObjectReactiveExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_AvaloniaObjectExtensions_GetValue__1">GetValue(T)(AvaloniaProperty(T))</a></td>
<td>Gets a <a href="T_Avalonia_AvaloniaProperty">AvaloniaProperty</a> value.<br />(Defined by <a href="T_Avalonia_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Diagnostics_AvaloniaObjectExtensions_GetValueStoreDiagnostic">GetValueStoreDiagnostic()</a></td>
<td>Gets a value store diagnostics for a <a href="T_Avalonia_AvaloniaObject">AvaloniaObject</a>.<br />(Defined by <a href="T_Avalonia_Diagnostics_AvaloniaObjectExtensions">AvaloniaObjectExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DesktopApplicationExtensions_Run_2">Run(CancellationToken)</a></td>
<td>On desktop-style platforms runs the application's main loop with custom CancellationToken without setting a lifetime.<br />(Defined by <a href="T_Avalonia_Controls_DesktopApplicationExtensions">DesktopApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DesktopApplicationExtensions_Run_1">Run(ICloseable)</a></td>
<td>On desktop-style platforms runs the application's main loop until closable is closed<br />(Defined by <a href="T_Avalonia_Controls_DesktopApplicationExtensions">DesktopApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DesktopApplicationExtensions_Run">Run(Window)</a></td>
<td>On desktop-style platforms runs the application's main loop until main window is closed<br />(Defined by <a href="T_Avalonia_Controls_DesktopApplicationExtensions">DesktopApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_DesktopApplicationExtensions_RunWithMainWindow__1">RunWithMainWindow(TWindow)()</a></td>
<td><br />(Defined by <a href="T_Avalonia_Controls_DesktopApplicationExtensions">DesktopApplicationExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_TryFindResource_1">TryFindResource(Object, Object)</a></td>
<td>Tries to the specified resource by searching up the logical tree and then global styles.<br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_TryFindResource">TryFindResource(Object, ThemeVariant, Object)</a></td>
<td>Tries to the specified resource by searching up the logical tree and then global styles.<br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
<tr>
<td><a href="M_Avalonia_Controls_ResourceNodeExtensions_TryGetResource">TryGetResource(Object, Object)</a></td>
<td>Tries to find a resource within the object.<br />(Defined by <a href="T_Avalonia_Controls_ResourceNodeExtensions">ResourceNodeExtensions</a>)</td>
</tr>
</table>

## See Also


#### Reference
<a href="N_Avalonia">Avalonia Namespace</a>  

